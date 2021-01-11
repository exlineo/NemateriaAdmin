import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';
import { FiltresService } from './filtres.service';
import { forEachChild } from 'typescript';
import { Set, SetModel } from '../modeles/set';
import { FiltreModel } from '../modeles/filtre.modele';
import { NotificationService } from 'src/app/intranet/systeme/services/notification.service';

@Injectable({
	providedIn: 'root'
})
export class ScanService {

	scans: any; // Les données reçues depuis le scan sur le serveur
	listeDossiers: any; // La liste des dossiers disponibles
	load: boolean = false; // Déclencher un loader sur la page de scan

	metaFiltrees: Array<any>; // Le tableau des données du scan filtrées
	filtre: any; // Filtre utilisé pour filtrer les données à enregistrer dans la base
	set: SetModel; // Set à enregistrer dans la base de données

	constructor(private http: HttpClient, private notifServ: NotificationService) {
		this.init();
		this.getListeDossiers();
	}
	/**
	 * Initialiser les données initiales
	 */
	init() {
		this.filtre = '';
		this.set = new Set();
		this.metaFiltrees = [];
	}
	/**
	 * Liste les dossiers scannables
	 */
	getListeDossiers() {
		this.http.get(environment.SERV + 'scans').subscribe(
			data => {
				console.log(data);
				this.listeDossiers = data;
			},
			erreur => {
				console.log(erreur);
				this.notifServ.notif("Nous n'avons pas la liste des dossiers");
			}
		)
	}
	/**
	   * Récupérer les métadonnées d'un fichier donné
	   */
	getMetaFiles(dir: string, f: string): void {
		// return this.http.get<Array<CollectionModel>>(this.dataStorage + 'collections.json');
		this.http.get(environment.SERV + 'scans/' + dir, { params: { 'f': f } }).subscribe(
			fichier => {
				this.scans = fichier['data'];
			},
			erreur => {
				console.log(erreur);
				this.notifServ.notif("Les données n'ont pu être scannées");
			}
		)
	}
	/**
	 * Récupérer la liste des métadonnées d'un dossier en particulier
	 */
	getDir(dir: string) {
		this.scans = null;
		this.load = true;
		this.http.get<boolean>(environment.SERV + 'scans/' + dir).subscribe(
			fichiers => {
				this.scans = fichiers['data'];
				this.load = false;
			},
			erreur => {
				console.log(erreur);
				this.notifServ.notif("Erreur dans le scan des dossiers du serveur");
			}
		)
	}
	/**
	 * Filtrer l'ensemble des données et les transmettre à la base
	 * @param filtre Filtre de référence pour traitr les données
	 */
	async setMetas(filtre: FiltreModel, set: SetModel) {
		this.metaFiltrees = [];
		this.filtre = filtre; // Récupérer le filtre sélectionné
		this.set = set; // Paramétrer le nom du set de données
		await this.scans.forEach(m => {
			this.filtreAPlat(m);
		});
		this.set.documents = this.metaFiltrees;
		this.enregistreSet();
	}
	/**
	 * Mettre à plat le filtre pour ne récupérer que les clés
	 */
	filtreAPlat(scanner) {
		let f = this.filtre.metadonnees;
		// Boucle dans les métadonnées du filtre
		for (let un in f) {
			// Récupérer le premier niveau d'objet
			if (typeof f[un] == "object") {
				for (let deux in f[un] as Object) {
					if (typeof f[un][deux] == "object") {
						for (let trois in f[un][deux] as Object) {
							let ct = this.cap(trois);
							f[un][deux][trois] = null;
							// Adapter les données de troisième niveau
							if (scanner.hasOwnProperty(ct)) f[un][deux][trois] = scanner[ct];
						}
					} else {
						let cd = this.cap(deux);
						// Adapter les données de deuxième niveau
						f[un][deux] = null;
						if (scanner.hasOwnProperty(cd)) f[un][deux] = scanner[cd];
					}
				}
			} else {
				// Adapter les données de premier niveau
				let cu = this.cap(un);
				f[un] = null;
				if (scanner.hasOwnProperty(cu)) f[un] = scanner[cu];
			}
		}
		this.metaFiltrees.push(f);
	}
	/**
	 * Enregistrer les données dans la base mongo dans les sets de données
	 */
	enregistreSet() {
		if (this.scans.some(e => e.alias === this.set.alias)) {
			console.log("Le nom du SET existe déjà");
			this.notifServ.notif("Attention, le nom du SET existe déjà");
		} else {
			this.http.post(environment.SERV + 'sets/', this.set).subscribe(
				retour => {
					console.log(retour);
				},
				erreur => {
					console.log(erreur);
					this.notifServ.notif("Erreur dans l'enregistrement du SET");
				}
			)
		}
	}
	/**
	 * Mettre la première lettre en capitales
	 * @param str Châine de caractère
	 */
	cap(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
}
