import { Component, OnInit, Input } from '@angular/core';
import { useAnimation, transition, trigger, style, animate, state } from '@angular/animations';
import { CollectionModel } from '../systeme/modeles/collection.modele';
import { NoticeModel } from '../systeme/modeles/notice.modele';
import { CollectionService } from '../systeme/services/collection.service';

@Component({
	selector: 'app-collection',
	templateUrl: './collection.component.html',
	styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

	@Input() collection: CollectionModel; // Collection transmise à l'affichage
	affiche: boolean = false;
	maj:boolean = false; // Mettre à jouer les données
	constructor(public colServ: CollectionService) { }

	ngOnInit() {}

	collectionOnClick(): void {
		this.affiche = true;
	}
	/**
	 * Afficher le formulaire de mise à jour
	 */
	afficheMaj(){
		this.maj = !this.maj;
	}
}
