import { Component, OnInit,  EventEmitter, Output  } from '@angular/core';

import { CONST } from '../systeme/const';
import { NoticeService } from "../systeme/services/notice.service";
import { NoticeModel } from "../systeme/modeles/notice.modele";
import { FiltrePipe } from "../systeme/pipes/filtre.pipe";
import { useAnimation, transition, trigger, style, animate, state } from '@angular/animations';
import { forEach } from '@angular/router/src/utils/collection';
//import { toggleLeft } from '../systeme/library/animation';

@Component({
	selector: 'app-notices',
	templateUrl: './notices.component.html',
	styleUrls: ['./notices.component.css'],
	animations: [
		trigger('openCloseLeftPanel', [
			state('open', style({
				width: CONST.lg
			})),
			state('closed', style({
				width: '0'
			})),
			transition('open => closed', [
				animate(CONST.delai)
			]),
			transition('closed => open', [
				animate(CONST.delai)
			]),
		]),
		trigger('openCloseRightPanel', [
			state('open', style({
				width: CONST.ld
			})),
			state('closed', style({
				width: '0'
			})),
			transition('open => closed', [
				animate(CONST.delai)
			]),
			transition('closed => open', [
				animate(CONST.delai)
			]),
		]),
	],
})
export class NoticesComponent implements OnInit {

	noticeListe: NoticeModel[] = []; // Liste générale des notices à afficher / filter
	noticeSelection: NoticeModel[] = []; // La liste des notices sélectionnées
	noticeElement: NoticeModel; // La notice dont les infos sont affichées
	noticeAffiche: boolean = false; // Affichers les infos rapides d'une notice
	noticeFiltre: string = '';

	leftPanelIsOpen:boolean = true;
	rightPanelIsOpen:boolean = true;

	afficheDetailNotice:boolean = false; // Afficher le composant notice lors du clic sur un oeil (dans une notice)

	constructor(public noticeService: NoticeService) { }

	ngOnInit() {
		this.noticeService.readNotices().subscribe(
			data => {
				this.noticeListe = data;
			}
		);
	}
	// Afficher le composant avec le détail des infos sur la notice
	noticeAfficheDetail($event, idNotice): void {
		// $event.preventDefault();
		this.noticeElement = this.noticeListe[idNotice];
		this.afficheDetailNotice = !this.afficheDetailNotice;
	}
	
	// Choisir une notice et la mettre dans la liste
	noticeOnChoisi($event, idNotice): void {
		$event.preventDefault();
		this.noticeElement = this.noticeListe[idNotice];
		this.noticeListe[idNotice].selected = true;
		if (this.noticeSelection.indexOf(this.noticeElement) == -1) {
			this.noticeSelection.push(this.noticeElement);
		}
	}
	// Afficher les infos d'une notice
	noticeOnInfo($event, idNotice): void {
		$event.preventDefault();
		this.noticeElement = this.noticeListe[idNotice];
		
		this.noticeAffiche = true;
	}
	// Initialiser les sélections
	noticeSelectionDump(): void {
		this.noticeAffiche = false;
		this.noticeSelection = [];
	}
	/**
	 * Enlever une notice de la sélection
	 * @param idNotice id de la notice à supprimer
	 */
	noticeSelectionRemove(idNotice): void {
		for (let index = 0; index < this.noticeSelection.length; index++) {
			let element = this.noticeSelection[index];
			if (element._id == idNotice) {
				this.noticeSelection.splice(index, 1);
			}
		}
	}
	/**
	 * Ajouter toutes les notices à la sélection
	 */
	noticesToutesChoisies(): void {
		this.noticeListe.forEach(
			n =>{
				n.selected = true;
			}
		)
		this.noticeSelection = this.noticeListe;
	}
	/**
	 * Ne sélectionner aucune notice
	 */
	noticesAucuneChoisie(): void {
		this.noticeListe.forEach(
			n =>{
				n.selected = false;
			}
		)
		this.noticeSelection = [];
	}
	toggleLeftPanel($event): void {
		$event.preventDefault();
		this.leftPanelIsOpen = !this.leftPanelIsOpen;
	}

	toggleRightPanel($event): void {
		$event.preventDefault();
		this.rightPanelIsOpen = !this.rightPanelIsOpen;
	}
	/**
	 * Masque la notice lorsqu'on clique sur le bouton pour la fermer
	 * @param bool Booléen pour fermer la fenêtre (false)
	 */
	masqueNotice(bool:boolean){
		this.afficheDetailNotice = bool;
	}
}
