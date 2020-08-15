import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { useAnimation, transition, trigger, style, animate, state } from '@angular/animations';

import { CONST } from '../systeme/const';
import { FiltreModel, Filtre } from '../systeme/modeles/filtre.modele';
import { CollectionModel } from '../systeme/modeles/collection.modele';
import { NoticeModel } from '../systeme/modeles/notice.modele';
import { CollectionService } from '../systeme/services/collection.service';
import { FiltresService } from '../systeme/services/filtres.service';

@Component({
	selector: 'app-filtres',
	templateUrl: './filtres.component.html',
	styleUrls: ['./filtres.component.css']
})
export class FiltresComponent implements OnInit {
	filtre:FiltreModel;
	edition:boolean;
	afficheFiltre:boolean; // Afficher la fiche de modification du filtre
	filtreSerie:string=''; // Filtrer les notices d'une collection en fonction de sa série

	constructor(public filtresServ: FiltresService, private rendu:Renderer2) { }

	ngOnInit() {
		this.filtre = new Filtre();
		this.edition = false;
		this.afficheFiltre = false;
	}
	/**
	 * Afficher le détail d'une collection
	 * @param idCollection Id de la collection à afficher
	 */
	filtreOnClick(id): void {
		this.filtresServ.filtres.forEach(
			f=>{
				if(f._id == id){
					this.filtre = f;
				}
			}
			
		);
		console.log(this.filtre);
	}
	/**
	 * Activer ou désactiver l'édition du filtre
	 */
	setEdit(){
		this.edition = !this.edition;
	}
	/**
	 * Supprimer une métadonnée traitée par le filtre
	 * @param id ID de la métadonnées à supprimer
	 */
	supprMeta(id:number){
		this.filtre.donnees.splice(id,1);
	}
	/**
	 * Enlever toutes les fenêtres pop-up et initialiser la collection et les notices
	 */
	masque(){
		this.edition = false;
	}
	ajouteFiltre(){
		this.filtre = new Filtre();
		this.edition = true;
	}
}
