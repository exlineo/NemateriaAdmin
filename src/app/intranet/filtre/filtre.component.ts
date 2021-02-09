import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FiltreModel } from '../systeme/modeles/filtre.modele';
import { FiltresService } from '../systeme/services/filtres.service';

@Component({
	selector: 'app-filtre',
	templateUrl: './filtre.component.html',
	styleUrls: ['./filtre.component.css']
})
export class FiltreComponent implements OnInit {

	@Input()
	filtre:FiltreModel;

	@Output()
	fermer = new EventEmitter<boolean>();

	meta:string;
	prefix:string = 'oai_nema';

	constructor(public filtreServ:FiltresService) { }

	ngOnInit() {
		this.meta="";
	}

	/**
	 * Méthode utilisée pour la mise à jour ou l'écriture d'une nouvelle collection
	 */
	ecrire(){
		console.log(this.filtre);
		this.filtre.prefix = this.prefix.replace(' ', '').split(',')
		if(this.filtre._id){
			this.filtreServ.majFiltre(this.filtre);
		}else{
			this.filtreServ.ajouteFiltre(this.filtre);
		}
	}
	/**
	 * Ajouter une méta à un filtre existant pour le modifier
	 */
	ajouteMeta(){
		console.log("ajoute meta", this.meta);
		this.filtre.metadonnees.push(this.meta);
	}
}
