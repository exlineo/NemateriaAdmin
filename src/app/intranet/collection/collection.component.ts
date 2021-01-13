import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { UtilsService } from '../systeme/library/utils.service';
import { CollectionModel, Collection } from '../systeme/modeles/collection.modele';
import { NoticeModel } from '../systeme/modeles/notice.modele';
import { SetModel } from '../systeme/modeles/set';
import { CollectionService } from '../systeme/services/collection.service';
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
	idCollection:any; // ID de la collection à afficher

	@Output()
	fermer = new EventEmitter<boolean>();

	affiche: boolean = false;
	maj:boolean = false; // Mettre à jouer les données
	
	constructor(public colServ: CollectionService, private setsServ:SetsService) { }

	ngOnInit() {
		console.log(this.idCollection);
		if(typeof(this.idCollection) == 'string'){
			this.collection = this.colServ.getCollection(this.idCollection); // Récupérer la collection à visualiser / updater
		}else if(this.idCollection == -1 || this.idCollection){
			this.collection = this.mapCollec(this.setsServ.set); // Créer une collection à partir des données du SET sélectionné
		}
		else{
			this.collection = new Collection(); // Créer une collection vide
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
	afficheMaj(){
		this.maj = !this.maj;
	}
	/**
	 * Méthode utilisée pour la mise à jour ou l'écriture d'une nouvelle collection
	 */
	ecrire(){
		console.log(this.collection);
		if(this.collection._id){
			this.colServ.majCollection(this.collection);
		}else{
			this.colServ.ajouteCollection(this.collection);
		}
	}
	/**
	 * Mapper des données reçues pour faire une collection
	 */
	mapCollec(obj:SetModel){
		const tmp = new Collection();
		// Peupler les données dans la nouvelle collection
		for(const o in obj){
			console.log(o);
			if(tmp[o]) tmp[o] = obj[o];
		};
		// Ajouter l'idée des documents dans les notices de la collection
		for(const n in obj.documents){
			tmp.notices.push(n['_id']);
		}
		// Récupérer les séries dans le SET
		tmp.series = obj.documents.map<string>( s => s.nemateria.serie)
		console.log(tmp);
		// Générer la collection
		return tmp;
	}
	/**
	 * Filtrer les séries dans des SETS
	 */
	filtreSetsSeries(ar:SetModel):Array<any>{
		return ar.documents.map<Array<SetModel>>( s => s.nemateria.serie)
	}
}
