import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { useAnimation, transition, trigger, style, animate, state } from '@angular/animations';

import { CONST } from '../systeme/const';
import { CollectionModel } from '../systeme/modeles/collection.modele';
import { NoticeModel } from '../systeme/modeles/notice.modele';
import { CollectionService } from '../systeme/services/collection.service';
import { NoticeService } from '../systeme/services/notice.service';

@Component({
	selector: 'app-collections',
	templateUrl: './collections.component.html',
	styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

	collectionListe: CollectionModel[] = []; // Liste de toutes les collections
	idCollection:number | string;
	idNotice:number | string;
	
	collec: CollectionModel={
		_id: '',
		titre: '',
		alias: '',
		description: '',
		type: '',
		createur: '',
		fond: '',
		langue: '',
		groupe:[],
		notices:[],
		series:[],
		selected:false
	}; // La collection sélectionnée à afficher
	
	afficheDetailCollec: boolean = false;
	afficheDetailNotice: boolean = false;
	afficheSuppression: boolean = false;

	filtreSerie:string=''; // Filtrer les notices d'une collection en fonction de sa série

	constructor(public colServ: CollectionService, public noticesServ:NoticeService) { }

	ngOnInit() {
		this.collec = this.colServ.collections[0];
	}
	/**
	 * Afficher le détail d'une collection
	 * @param index Index de la collection dans le tableau des collections
	 * @param idCollection Id de la collection à afficher
	 */
	collectionOnClick(index, idCollection): void {
		// Identifier la collection cliquée
		this.collec = this.colServ.collections[index];
		console.log(this.collec);
		// Récupérer les notices de la collection
		this.noticesServ.getNoticesByCollec(this.collec._id);
	}
	noticeOnClick(index, idNotice): void {
		this.idNotice = idNotice;
	}

	masque(e){
		this.afficheDetailCollec = false;
		this.afficheDetailNotice = false;
		this.afficheSuppression = false;
		this.idNotice = null;
		this.idCollection = null;
	}
}
