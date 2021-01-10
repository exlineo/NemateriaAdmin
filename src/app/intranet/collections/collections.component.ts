import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { useAnimation, transition, trigger, style, animate, state } from '@angular/animations';

import { CONST } from '../systeme/const';
import { CollectionModel, Collection } from '../systeme/modeles/collection.modele';
import { NoticeModel } from '../systeme/modeles/notice.modele';
import { CollectionService } from '../systeme/services/collection.service';
import { NoticeService } from '../systeme/services/notice.service';
import { ThrowStmt } from '@angular/compiler';
import { UtilsService } from '../systeme/library/utils.service';

@Component({
	selector: 'app-collections',
	templateUrl: './collections.component.html',
	styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

	collectionListe: Array<CollectionModel> = []; // Liste de toutes les collections
	idCollection:number | string;
	idNotice:number | string;
	
	collec: CollectionModel= new Collection(); // La collection sélectionnée à afficher
	
	afficheDetailCollec: boolean = false;
	afficheDetailNotice: boolean = false;
	afficheEnlever: boolean = false;

	filtreSerie:string=''; // Filtrer les notices d'une collection en fonction de sa série

	constructor(public colServ: CollectionService, public noticesServ:NoticeService, public utils:UtilsService) { }

	ngOnInit() {
	}
	/**
	 * Afficher le détail d'une collection
	 * @param index Index de la collection dans le tableau des collections
	 * @param idCollection Id de la collection à afficher
	 */
	collectionOnClick(id): void {
		this.idCollection = id;
		// Identifier la collection cliquée
		this.collec = this.colServ.getCollection(id);
		console.log(this.collec);
		// Récupérer les notices de la collection
		this.noticesServ.getNoticesByCollec(this.collec._id);
		// this.colServ.getSeries(idCollection);
	}
	/**
	 * 
	 * @param id Afficher la fenêtre de validation pour l'enlèvement d'une notice dans une collection
	 */
	noticeOnEnlever(id){
		console.log("Notice à enlever", id);
		this.idNotice = id;
		this.afficheEnlever = true;
	}
	enleverNotice(){
		
	}
	/**
	 * Afficher une pop-up d'une notice
	 * @param id ID de la notice à afficher pour consultation
	 */
	noticeOnAffiche(id){
		this.idNotice = id;
		// this.noticesServ.getNotice(id);
		this.afficheDetailNotice = true;
	}
	/**
	 * Enlever toutes les fenêtres pop-up et initialiser la collection et les notices
	 */
	masque(){
		this.afficheDetailCollec = false;
		this.afficheDetailNotice = false;
		this.afficheEnlever = false;
		this.idNotice = null;
		this.idCollection = null;
	}
}
