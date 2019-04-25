import { Component, OnInit,  EventEmitter, Output  } from '@angular/core';

import { CONST } from '../systeme/const';
import { NoticeModel } from "../systeme/modeles/notice.modele";
import { FiltrePipe } from "../systeme/pipes/filtre.pipe";
import { useAnimation, transition, trigger, style, animate, state } from '@angular/animations';
import { forEach } from '@angular/router/src/utils/collection';
import { toggleLeft } from '../systeme/library/animation';
import { ScanService } from '../systeme/services/scan.service';

@Component({
	selector: 'app-scanner',
	templateUrl: './scanner.component.html',
	styleUrls: ['./scanner.component.css'],
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
	]
})
export class ScannerComponent implements OnInit {
	scanListe:Array<string>;

	leftPanelIsOpen:boolean = true;
	rightPanelIsOpen:boolean = true;

	constructor(public scanServ:ScanService) { }

	ngOnInit() {
		this.scanServ.getDir();
	}
	/**
	 * Accéder aux notices d'une scan
	 * @param dossier Dossier scanné pour afficher la liste des notices
	 */
	scanOnClick(dossier){

	}
	
	toggleLeftPanel($event): void {
		$event.preventDefault();
		this.leftPanelIsOpen = !this.leftPanelIsOpen;
	}

	toggleRightPanel($event): void {
		$event.preventDefault();
		this.rightPanelIsOpen = !this.rightPanelIsOpen;
	}
	
}
