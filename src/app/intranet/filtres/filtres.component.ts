import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { useAnimation, transition, trigger, style, animate, state } from '@angular/animations';

import { CONST } from '../systeme/const';
import { FiltreModel } from '../systeme/modeles/filtre.modele';
import { CollectionModel } from '../systeme/modeles/collection.modele';
import { NoticeModel } from '../systeme/modeles/notice.modele';
import { CollectionService } from '../systeme/services/collection.service';

@Component({
	selector: 'app-filtres',
	templateUrl: './filtres.component.html',
	styleUrls: ['./filtres.component.css']
})
export class FiltresComponent implements OnInit {
	filtresListe:Array<FiltreModel>;
	collectionListe: CollectionModel[] = []; // Liste de toutes les collections
	noticeListe: NoticeModel[] = []; // Liste des notices d'une sélection
	notice:NoticeModel;
	filtre: FiltreModel; // La collection sélectionnée à afficher
	collectionAffiche: boolean = false;

	filtreSerie:string=''; // Filtrer les notices d'une collection en fonction de sa série

	leftPanelIsOpen = true; // Etat d'ouverture du panneau de gauche
	rightPanelIsOpen = true; // Etat d'ouverture du panneau de droite

	constructor(public collectionService: CollectionService, private rendu:Renderer2) { }

	ngOnInit() {
		
	}
	/**
	 * Afficher le détail d'une collection
	 * @param idCollection Id de la collection à afficher
	 */
	collectionOnClick(id): void {
		this.filtre = this.filtresListe[id];
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
