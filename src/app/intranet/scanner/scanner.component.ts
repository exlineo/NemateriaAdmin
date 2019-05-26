import { Component, OnInit,  EventEmitter, Output  } from '@angular/core';

import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

import { ScanService } from '../systeme/services/scan.service';
import { UtilsService } from '../systeme/library/utils.service';
import { MappagesService } from '../systeme/services/mappages.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-scanner',
	templateUrl: './scanner.component.html',
	styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {
	
	scanListe:Array<string>;
	set:string;

	panelOpenState = false;

	constructor(public scanServ:ScanService, public mapServ:MappagesService, public utils:UtilsService, private router:Router) { }

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
	/**
	 * Envoyer les clés au service de mappage
	 * @param s Clés du set scanné dans le dossier
	 */
	extraitSet(){
		console.log(Object.keys(this.scanServ.scans[0]));
		this.mapServ.set = Object.keys(this.scanServ.scans[0]);
		this.router.navigateByUrl('/intranet/mappages');
	}
}
