import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { useAnimation, transition, trigger, style, animate, state } from '@angular/animations';

import { CONST } from '../systeme/const';
import { CollectionModel } from '../systeme/modeles/collection.modele';
import { NoticeModel } from '../systeme/modeles/notice.modele';
import { CollectionService } from '../systeme/services/collection.service';

@Component({
	selector: 'app-collections',
	templateUrl: './collections.component.html',
	styleUrls: ['./collections.component.css'],
	// animations: [
	// 	trigger('openCloseLeftPanel', [
	// 		state('open', style({
	// 			width: CONST.lg
	// 		})),
	// 		state('closed', style({
	// 			width: '0'
	// 		})),
	// 		transition('open => closed', [
	// 			animate(CONST.delai)
	// 		]),
	// 		transition('closed => open', [
	// 			animate(CONST.delai)
	// 		]),
	// 	]),
	// 	trigger('openCloseRightPanel', [
	// 		state('open', style({
	// 			width: CONST.ld
	// 		})),
	// 		state('closed', style({
	// 			width: '0'
	// 		})),
	// 		transition('open => closed', [
	// 			animate(CONST.delai)
	// 		]),
	// 		transition('closed => open', [
	// 			animate(CONST.delai)
	// 		]),
	// 	]),
	// ]
})
export class CollectionsComponent implements OnInit {

	collectionListe: CollectionModel[] = []; // Liste de toutes les collections
	noticeListe: NoticeModel[] = []; // Liste des notices d'une sélection
	notice:NoticeModel;
	collec: CollectionModel; // La collection sélectionnée à afficher
	collectionAffiche: boolean = false;

	filtreSerie:string=''; // Filtrer les notices d'une collection en fonction de sa série

	leftPanelIsOpen = true; // Etat d'ouverture du panneau de gauche
	rightPanelIsOpen = true; // Etat d'ouverture du panneau de droite

	constructor(public collectionService: CollectionService, private rendu:Renderer2) { }

	ngOnInit() {
		this.collectionService.readCollections().subscribe(
			data => {
				this.collectionListe = data;
				this.collectionOnClick(0);
			}
		);
	}
	/**
	 * Afficher le détail d'une collection
	 * @param idCollection Id de la collection à afficher
	 */
	collectionOnClick(idCollection): void {
		this.collec = this.collectionListe[idCollection];
		this.noticeListe = this.collec.notices;
		this.collectionAffiche = true;
	}
	noticeOnClick($event, idNotice): void {
		$event.preventDefault();
		alert('yolo');
	}

	/**
	 * Ouvrir ou fermer le panneau de gauche
	 * @param $event Evénement du clic
	 */
	toggleLeftPanel($event): void {
		$event.preventDefault();
		this.leftPanelIsOpen = !this.leftPanelIsOpen;
	}
	/**
	 * Ouvrir ou fermer le panneau de droite
	 * @param $event Evénement du clic
	 */
	toggleRightPanel($event): void {
		$event.preventDefault();
		this.rightPanelIsOpen = !this.rightPanelIsOpen;
	}
	/**
	 * Afficher ou fermer une élément HTML
	 * @param id Id de l'élément HTML a afficher
	 */
	toggleSeries(id){
		let series = document.querySelector('#'+id);
		console.log(series);
		series.classList.toggle('ferme');
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
}
