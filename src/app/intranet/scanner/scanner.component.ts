import { Component, OnInit,  EventEmitter, Output  } from '@angular/core';

import { CONST } from '../systeme/const';
import { NoticeModel } from "../systeme/modeles/notice.modele";
import { FiltrePipe } from "../systeme/pipes/filtre.pipe";
import { useAnimation, transition, trigger, style, animate, state } from '@angular/animations';
import { forEach } from '@angular/router/src/utils/collection';
import { toggleLeft } from '../systeme/library/animation';
import { ScanService } from '../systeme/services/scan.service';
import { UtilsService } from '../systeme/library/utils.service';

@Component({
	selector: 'app-scanner',
	templateUrl: './scanner.component.html',
	styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {
	
	scanListe:Array<string>;

	panelOpenState = false;

	constructor(public scanServ:ScanService, public utils:UtilsService) { }

	ngOnInit() {
		// this.scanServ.getDir();
	}
	/**
	 * Accéder aux notices d'une scan
	 * @param dossier Dossier scanné pour afficher la liste des notices
	 */
	scanOnClick(dossier){
		this.scanServ.getDir(dossier);
	}
}
