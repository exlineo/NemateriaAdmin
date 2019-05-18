import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { useAnimation, transition, trigger, style, animate, state } from '@angular/animations';
import { CollectionModel, Collection } from '../systeme/modeles/collection.modele';
import { NoticeModel } from '../systeme/modeles/notice.modele';
import { CollectionService } from '../systeme/services/collection.service';

@Component({
	selector: 'app-collection',
	templateUrl: './collection.component.html',
	styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

	@Input()
	collection: CollectionModel; // Collection transmise à l'affichage

	@Input()
	idCollection:number | string; // ID de la collection à afficher

	@Output()
	fermer = new EventEmitter<boolean>();

	affiche: boolean = false;
	maj:boolean = false; // Mettre à jouer les données
	
	constructor(public colServ: CollectionService) { }

	ngOnInit() {
		console.log(this.idCollection);
		if(this.idCollection){
			this.collection = this.colServ.getCollection(this.idCollection); // Récupérer la collection à visualiser / updater
		}else{
			this.collection = new Collection(); // Créer une collection vide
		}
	}

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
}
