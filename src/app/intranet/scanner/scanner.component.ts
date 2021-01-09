import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators, NgModel } from '@angular/forms';

import { ScanService } from '../systeme/services/scan.service';
import { UtilsService } from '../systeme/library/utils.service';
import { MappagesService } from '../systeme/services/mappages.service';
import { Router } from '@angular/router';
import { FiltresService } from '../systeme/services/filtres.service';
import { FiltreModel, Filtre } from '../systeme/modeles/filtre.modele';
import { SetModel, Set } from '../systeme/modeles/set';

@Component({
	selector: 'app-scanner',
	templateUrl: './scanner.component.html',
	styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {

	scanListe: Array<string>;
	set: SetModel;
	filtreChoisi: FiltreModel;
	_idFiltre: string;

	panelOpenState = false;

	constructor(public scanServ: ScanService, public filtresServ: FiltresService, public mapServ: MappagesService, public utils: UtilsService, private router: Router) { }

	ngOnInit() {
		this.set = new Set();
		this.set.date =  Date.now();
		this.filtreChoisi = new Filtre();
	}
	/**
	 * Accéder aux notices d'une scan
	 * @param dossier Dossier scanné pour afficher la liste des notices
	 */
	scanOnClick(dossier) {
		this.set.titre = dossier;
		this.scanServ.getDir(dossier);
	}
	/**
	 * Envoyer les clés au service de mappage
	 * @param s Clés du set scanné dans le dossier
	 */
	extraitSet() {
		this.mapServ.set.metadonnees = this.scanServ.scans[0];
		this.router.navigateByUrl('/intranet/mappages');
	}
	/**
	 * FIltre choisi depuis la liste déroulante
	 */
	choixFiltre() {
		this.filtreChoisi = this.filtresServ.filtres.find(f => f._id == this._idFiltre);
		console.log(this.filtreChoisi);
	}
	/**
	 * Lancer la copie des données scannée vers un tableau de données filtrées
	 * @param f Données du formulaire
	 */
	creeFiltre(f: NgForm) {
		console.log(f.value);
		this.scanServ.setMetas(this.filtreChoisi, this.set);
	}
}
