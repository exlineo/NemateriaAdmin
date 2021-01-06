import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';
import { FiltresService } from './filtres.service';
import { forEachChild } from 'typescript';

@Injectable({
	providedIn: 'root'
})
export class ScanService {

	scans: any; // Les données reçues depuis le scan sur le serveur
	listeDossiers: any; // La liste des dossiers disponibles
	load:boolean = false; // Déclencher un loader sur la page de scan
	
	metaFiltrees:Array<any>; // Le tableau des données du scan filtrées
	filtre:any; // Filtre utilisé pour filtrer les données à enregistrer dans la base
	set:string; // Nom du set à enregistrer dans la base de données

	constructor(private http: HttpClient) {
		this.init();
		this.getListeDossiers();
	}
	/**
	 * Initialiser les données initiales
	 */
	init(){
		this.filtre = '';
		this.set = '';
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
				console.log(fichier['data']);
				this.scans = fichier['data'];
				console.log(this.scans);
			}
		)
	}
	/**
	 * Récupérer la liste des métadonnées d'un dossier en particulier
	 */
	getDir(dir:string) {
		this.scans = null;
		this.load = true;
		// return this.http.get<Array<CollectionModel>>(this.dataStorage + 'collections.json');
		this.http.get<boolean>(environment.SERV + 'scans/'+dir).subscribe(
			fichiers => {
				fichiers['data'].forEach(f => {
					for(let i in f){
						if(i.indexOf('Ingredient') !== -1 || i.indexOf('Pantry') !== -1){
							delete f[i];
						}
					}
				});
				this.scans = fichiers['data'];
				this.load = false;
			}
		)
	}
	/**
	 * Filtrer l'ensemble des données et les transmettre à la base
	 * @param filtre Filtre de référence pour traitr les données
	 */
	async setMetas(filtre, set){
		this.filtre = filtre; // Récupérer le filtre sélectionné
		this.set = set; // Paramétrer le nom du set de données
		await this.scans.forEach( m => {
			this.filtreAPlat(m);
		});
		console.log(this.metaFiltrees);
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
				// console.log("Niveau 1", un, f[un], scanner.hasOwnProperty(un));
				for (let deux in f[un] as Object) {
					if (typeof f[un][deux] == "object") {
						// console.log("Niveau deux", deux, f[un][deux], scanner.hasOwnProperty(deux));
						for (let trois in f[un][deux] as Object) {
							let ct = this.cap(trois);
							// Adapter les données de troisième niveau
							if(scanner.hasOwnProperty(ct)) f[un][deux][trois] = scanner[ct];
						}
					} else {
						let cd = this.cap(deux);
						// Adapter les données de deuxième niveau
						if(scanner.hasOwnProperty(cd)) f[un][deux] = scanner[cd];
					}
				}
			} else {
				// Adapter les données de premier niveau
				let cu = this.cap(un);
				if(scanner.hasOwnProperty(cu)) f[un] = scanner[cu];
				// console.log(un, f[un], scanner.hasOwnProperty(un));
			}
		}
		this.metaFiltrees.push(f);
	}
	/**
	 * Enregistrer les données dans la base mongo dans les sets de données
	 */
	enregistreSet(){
		this.http.post(environment.SERV+'notices/', this.metaFiltrees).subscribe(
			retour => {
				console.log(retour);
			}
		)
	}
	/**
	 * Mettre la première lettre en capitales
	 * @param str Châine de caractère
	 */
	cap(str){
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
}
