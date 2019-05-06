import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { useAnimation, transition, trigger, style, animate, state } from '@angular/animations';

import { CONST } from '../systeme/const';
import { CollectionModel } from '../systeme/modeles/collection.modele';
import { NoticeModel } from '../systeme/modeles/notice.modele';
import { CollectionService } from '../systeme/services/collection.service';

@Component({
	selector: 'app-collections',
	templateUrl: './collections.component.html',
	styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

	collectionListe: CollectionModel[] = []; // Liste de toutes les collections
	
	noticeListe: NoticeModel[] = []; // Liste des notices d'une sélection
	notice:NoticeModel;
	
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
	}; // La collection sélectionnée à afficher
	
	afficheDetailCollec: boolean = false;

	filtreSerie:string=''; // Filtrer les notices d'une collection en fonction de sa série

	constructor(public colServ: CollectionService, private rendu:Renderer2) { }

	ngOnInit() {
		this.collec = this.colServ.collections[0];
	}
	/**
	 * Afficher le détail d'une collection
	 * @param idCollection Id de la collection à afficher
	 */
	collectionOnClick(index, idCollection): void {
		this.collec = this.colServ.collections[index];
		console.log(this.collec);
		this.noticeListe = this.collec.notices;
	}
	noticeOnClick($event, idNotice): void {
		$event.preventDefault();
		alert('yolo');
	}

	/* INTERACTIONS AVEC LES NOTICES */
	// Afficher le composant avec le détail des infos sur la notice
	noticeAfficheDetail($event, idNotice): void {
		// $event.preventDefault();
		this.notice = this.noticeListe[idNotice];
		// this.afficheDetailNotice = !this.afficheDetailNotice;
	}
	
	// Choisir une notice et la mettre dans la liste
	noticeOnChoisi($event, idNotice): void {
		$event.preventDefault();
		this.notice = this.noticeListe[idNotice];
		this.noticeListe[idNotice].selected = true;
		if (this.noticeListe.indexOf(this.notice) == -1) {
			this.noticeListe.push(this.notice);
		}
	}
	// Afficher les infos d'une notice
	noticeOnInfo($event, idNotice): void {
		$event.preventDefault();
		this.notice = this.noticeListe[idNotice];
		
		// this.noticeAffiche = true;
	}

	masque(e){
		this.afficheDetailCollec = false;
	}
}
