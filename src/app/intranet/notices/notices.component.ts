import { Component, OnInit,  EventEmitter, Output  } from '@angular/core';

import { CONST } from '../systeme/const';
import { NoticeService } from "../systeme/services/notice.service";
import { NoticeModel } from "../systeme/modeles/notice.modele";
import { FiltrePipe } from "../systeme/pipes/filtre.pipe";
import { useAnimation, transition, trigger, style, animate, state } from '@angular/animations';
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

	noticeListe: NoticeModel[] = [];
	noticeSelection: NoticeModel[] = [];
	noticeElement: NoticeModel;
	noticeAffiche: boolean = false;
	noticeFiltre: string = '';

	leftPanelIsOpen:boolean = true;
	rightPanelIsOpen:boolean = true;

	afficheNotice:boolean = false;
	noticeSelectionnee:NoticeModel;

	constructor(public noticeService: NoticeService) { }

	ngOnInit() {
		this.noticeService.readNotices().subscribe(
			data => {
				this.noticeListe = data;
			}
		);
	}
	// Choisir une notice et la mettre dans la liste
	noticeOnChoisi($event, idNotice): void {
		$event.preventDefault();
		this.noticeElement = this.noticeListe[idNotice];
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

	noticeSelectionRemove(idNotice): void {
		for (let index = 0; index < this.noticeSelection.length; index++) {
			let element = this.noticeSelection[index];
			if (element._id == idNotice) {
				this.noticeSelection.splice(index, 1);
			}
		}
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
		this.afficheNotice = bool;
	}
}
