import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { UtilsService } from '../systeme/library/utils.service';
import { CollectionModel, Collection } from '../systeme/modeles/collection.modele';
import { DocumentModel, NemaSerieModel } from '../systeme/modeles/documents-model';
import { NoticeModel } from '../systeme/modeles/notice.modele';
import { SetModel } from '../systeme/modeles/set';
import { CollectionService } from '../systeme/services/collection.service';
import { NoticeService } from '../systeme/services/notice.service';
import { SetsService } from '../systeme/services/sets.service';

@Component({
	selector: 'app-collection',
	templateUrl: './collection.component.html',
	styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

	@Input()
	collection: CollectionModel; // Collection transmise à l'affichage

	@Input()
	idCollection: any; // ID de la collection à afficher

	@Output()
	fermer = new EventEmitter<boolean>();

	affiche: boolean = false;
	maj: boolean = false; // Mettre à jouer les données
	cree: boolean = false;

	constructor(public colServ: CollectionService, public setsServ: SetsService, private noticesServ: NoticeService) { }

	ngOnInit() {
		console.log(this.idCollection);
		if (typeof (this.idCollection) == 'string') {
			this.colServ.getCollection(this.idCollection); // Récupérer la collection à visualiser / updater
		} else if (this.idCollection == -1 && this.setsServ.set) {
			this.cree = true;
			this.colServ.collection = this.mapSet(this.setsServ.set); // Créer une collection à partir des données du SET sélectionné
			this.genereNotices(); // Générer les notices à partir du SET
		}
		else {
			this.colServ.collection = new Collection(); // Créer une collection vide
		}
	}
	/**
	 * Clic sur une collection
	 */
	collectionOnClick(): void {
		this.affiche = true;
	}
	/**
	 * Afficher le formulaire de mise à jour
	 */
	afficheMaj() {
		this.maj = !this.maj;
	}
	/**
	 * Méthode utilisée pour la mise à jour ou l'écriture d'une nouvelle collection
	 */
	ecrire() {
		if (this.colServ.collection._id) {
			this.colServ.majCollection();
		} else {
			// this.colServ.ajouteCollection();
			this.colServ.ajouteNoticeAvantCollection()
		}
	}
	/**
	 * Mapper des données reçues pour faire une collection
	 */
	mapSet(set: SetModel) {
		let tmp: Collection = new Collection();
		// Peupler les données dans la nouvelle collection
		for (let o in set) {
			if (tmp.hasOwnProperty(o) && o != '_id') {
				tmp[o] = set[o];
			};
		};
		console.log(tmp);
		tmp.series = [];
		// Récupérer les séries dans le SET
		set.documents.forEach(s => {
			// console.log(s);
			if (!tmp.series.includes(s.nemateria.serie.serie)) tmp.series.push(s.nemateria.serie.serie);
		});
		// Générer la collection
		return tmp;
	}
	/**
	 * Générer des notices à partir des documents du SET (lorsqu'utile)
	 */
	genereNotices() {
		this.colServ.notices = [];
		this.setsServ.set.documents.map(
			n => {
				n.nemateria.collection.nom_collection = this.colServ.collection.titre;
				n.nemateria.collection.fonds = this.colServ.collection.fonds;
				this.colServ.notices.push({ 'metadonnees': n });
			}
		);
		this.colServ.notifServ.notif('Les notices ont été intégrées dans la collection.');
		console.log(this.colServ.notices);
	}
	supprimeNotice(id) {

	}
}
