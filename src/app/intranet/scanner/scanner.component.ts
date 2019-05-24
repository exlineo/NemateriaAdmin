import { Component, OnInit,  EventEmitter, Output  } from '@angular/core';

import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

import { ScanService } from '../systeme/services/scan.service';
import { UtilsService } from '../systeme/library/utils.service';

@Component({
	selector: 'app-scanner',
	templateUrl: './scanner.component.html',
	styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {
	
	scanListe:Array<string>;
	set:string;

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
		this.set = dossier;
		this.scanServ.getDir(dossier);
	}
}
