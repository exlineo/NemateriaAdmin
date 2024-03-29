import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

import { Set, SetModel } from '../modeles/set';
import { FiltreModel } from '../modeles/filtre.modele';
import { NotificationService } from 'src/app/intranet/systeme/services/notification.service';
import { UtilsService } from '../library/utils.service';
import { FiltresService } from './filtres.service';
import { SetsService } from './sets.service';
import { AuthService } from '../../../extranet/systeme/services/auth.service';

@Injectable({
	providedIn: 'root'
})
export class ScanService {

	scans: any; // Les données reçues depuis le scan sur le serveur
	listeDossiers: any; // La liste des dossiers disponibles
	dir:string = ''; // Dossier scanné en cours
	load: boolean = false; // Déclencher un loader sur la page de scan
	docs: any;

	metas: any; // Le tableau des données du scan filtrées. Any pour faire ce que l'ont veut avec
	filtre: any; // Filtre utilisé pour filtrer les données à enregistrer dans la base
	set: SetModel; // Set à enregistrer dans la base de données

	constructor(private http: HttpClient, private notifServ: NotificationService, private utils: UtilsService, private filtreServ:FiltresService, private setServ:SetsService, private auth:AuthService) {
		this.init();
		this.getListeDossiers();
	}
	/**
	 * Initialiser les données initiales
	 */
	init() {
		this.filtre = [];
		this.set = new Set();
		this.metas = null;
		this.dir = '';
	}
	/**
	 * Liste les dossiers scannables
	 */
	getListeDossiers() {
		this.http.get(environment.SERV + 'scans').subscribe(
			data => {
				this.listeDossiers = data;
				this.notifServ.notif("Liste des dossiers récupérée");
			},
			erreur => {
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
				this.notifServ.notif("Metadonnées scannées");
			},
			erreur => {
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
		this.dir = dir;
		this.http.get<boolean>(environment.SERV + 'scans/' + dir).subscribe(
			fichiers => {
				this.scans = fichiers['data'];
				this.load = false;
				this.notifServ.notif("Metadonnées scannées");
			},
			erreur => {
				this.notifServ.notif("Erreur dans le scan des dossiers du serveur");
			}
		)
	}
	/**
	 * Filtrer l'ensemble des données et les transmettre à la base
	 * @param filtre Filtre de référence pour traitr les données
	 */
	setMetas(filtre: FiltreModel, set: SetModel) {
		if(this.auth.userAuth.statut >=2){
		this.metas = filtre.metadonnees; // Récupérer le filtre sélectionné
		// Création d'un SET de base
		this.set = set; // Paramétrer le nom du set de données
		this.set.documents = []; // Initialisation des documents du SET
		this.set.documents = this.scans.map(s => this.filtreAPlat(s));

		// Enregistrer les données dans la base
		this.enregistreSet();
		}
	}
	/**
	 * Mettre à plat le filtre pour ne récupérer que les clés
	 * @param fm Filtre à traduire en objet pour l'inscrire dans le tableau des métas
	 * @param Le document à comparer
	 */
	filtreAPlat(scan) {
		let obj = {};
		// Boucle dans les métadonnées du filtre
		for (let un in this.metas) {
			// Récupérer le premier niveau d'objet
			if (typeof this.metas[un] == "object" && !Array.isArray(this.metas[un])) {
				// Définir l'objet trouvé dans le temporaire
				obj[un] = {};
				for (let deux in this.metas[un] as Object) {
					if (typeof this.metas[un][deux] == "object" && !Array.isArray(this.metas[un][deux])) {
						//Définir l'objet trouvé dans l'objet temporaire
						obj[un][deux] = {};
						for (let trois in this.metas[un][deux] as Object) {
							this.setPropriete(trois, obj[un][deux], scan);
						}
					} else {
						this.setPropriete(deux, obj[un], scan);
					}
				}
			} else {
				this.setPropriete(un, obj, scan);
			}
		};
		// Adapter certaines données
		// L'identifier
		if (!scan['identifier']) {
			scan['identifiant_unique'] ? obj['dublincore'].identifier = "oai:nemateria.net/" + scan['identifiant_unique'] : obj['dublincore'].identifier = "oai:nemateria.net/" + Date.now();
		};

		// La date
		if (!scan['date']) {
			scan['date_creation_original'] ? obj['dublincore'].date = scan['date_creation_original'] : obj['dublincore'].date = Date.now();
		}
		// Ajout du format du document pour en contrôler le type
		obj['dublincore'].format = this.utils.setFormat(scan['SourceFile'].slice(scan['SourceFile'].lastIndexOf('.')+1, scan['SourceFile'].length));
		
		// Les prefix : oai au minimum. Les données Nemateria seront traitées par des outils plus riches
		this.set.prefix ? obj['prefix'] = this.set.prefix : ['oai_dc'];
		return obj;
	}
	/**
	 * Attribuer une propriété à un objet mappé
	 * @param prop Propriété à retouver dans les tableaux et objets
	 * @param obj Objet à inscrire la valeur
	 * @param scan Valeur à récupérer dans le scan
	 */
	setPropriete(prop, obj, scan) {
		let tmp = this.cap(prop);
		console.log(tmp, scan[tmp]);
		// Gérer les cas particuliers
		if (prop.toLowerCase() === 'url') scan[tmp] = this.setURL(scan['SourceFile']);
		if (prop.toLowerCase() === 'coverage' && scan[tmp]) scan[tmp] = this.setURL(scan[tmp]);

		if (prop === 'file') scan[tmp] = this.setFile(scan['SourceFile']);
		// Attribuer une nouvelle valeur
		// if (scan.hasOwnProperty(tmp)) Object.defineProperty(obj, prop, { value: scan[tmp] });
		if (scan.hasOwnProperty(tmp)) obj[prop] = scan[tmp];
	}
	/**
	 * Enregistrer les données dans la base mongo dans les sets de données
	 */
	enregistreSet() {
		this.http.post<SetModel>(environment.SERV + 'sets/', this.set).subscribe(
			retour => {
				this.setServ.getSets(); // Mettre à jour les sets
				this.notifServ.notif("SET enregistré");
			},
			erreur => {
				this.notifServ.notif("Erreur dans l'enregistrement du SET");
			}
		)
	}
	/**
	 * Mettre la première lettre en capitales
	 * @param str Châine de caractère
	 */
	cap(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
	/**
	 * Ajouter l'adresse au fichier pour lui donner
	 * @param {string} str URL à convertir
	 */
	setURL(str: string): string {
		if(str.indexOf(environment.DIR) != -1){
			str = str.slice(str.lastIndexOf('/') +1, str.length); // Récupérer la fin de l'URL du fichier
		}
		return environment.ADR + environment.DIR + this.dir + '/' + str;
	}
	/**
	 * Extraire le nom du fichier
	 * @param str chaîne à traiter pour extraire le nom du fichier
	 */
	setFile(str: string): string {
		return str.substr(str.lastIndexOf("/") + 1, str.length);
	}
}
