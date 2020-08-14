import { Component, OnInit,  EventEmitter, Output  } from '@angular/core';

import { CONST } from '../systeme/const';
import { NoticeService } from "../systeme/services/notice.service";
import { NoticeModel } from "../systeme/modeles/notice.modele";
import { FiltreNoticesPipe } from "../systeme/pipes/filtre-notices.pipe";
import { useAnimation, transition, trigger, style, animate, state } from '@angular/animations';
import { toggleLeft } from '../systeme/library/animation';

@Component({
	selector: 'app-notices',
	templateUrl: './notices.component.html',
	styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {

	noticeListe: NoticeModel[] = []; // Liste générale des notices à afficher / filter
	noticeSelection: NoticeModel[] = []; // La liste des notices sélectionnées
	noticeChoisie:NoticeModel; // Notice dont on affiche les informations lorsque sollicitée

	noticeFiltre;

	idNotice:number | string;
	idCollection:number | string;

	noticeAffiche: boolean = false; // Affichers les infos rapides d'une notice
	filtre: any = {libre:'', dateDebut:'', dateFin:'', type:''};

	afficheDetailNotice:boolean = false; // Afficher le composant notice lors du clic sur un oeil (dans une notice)
	afficheDetailCollec:boolean = false; // Afficher le composant notice lors du clic sur un oeil (dans une notice)

	constructor(public noticesServ: NoticeService) { }

	ngOnInit() {
		this.idNotice = -1;
	}
	/**
	 * Afficher le composant avec le détail des infos sur la notice
	 * 
	*/ 
	noticeOnAffiche(idNotice): void {
		// $event.preventDefault();
		this.idNotice = idNotice;
		this.afficheDetailNotice = !this.afficheDetailNotice;
	}
	/**
	 * Choisir une notice et la mettre dans la liste
	 * 
	*/
	noticeSelectionnee(idNotice): void {
		this.idNotice = idNotice;
		if(this.noticeSelection.indexOf(this.noticesServ.getNotice(idNotice)) == -1){
			this.noticeSelection.push(this.noticesServ.getNotice(idNotice, true));
		}else{
			this.noticeSelectionRemove(idNotice);
		}
	}
	/**
	 * Afficher les infos d'une notice
	 * @param idNotice id de la notice dnt on veut les infos
	*/
	noticeOnInfo(idNotice): void {
		if(this.noticeChoisie == this.noticesServ.getNotice(idNotice)){
			this.noticeAffiche = false;
			this.noticeChoisie = null;
		}else{
			this.noticeChoisie = this.noticesServ.getNotice(idNotice);
			this.noticeAffiche = true;
		}
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
			element.selected = false;
			if (element._id == idNotice) {
				this.noticeSelection.splice(index, 1);
			}
		}
	}
	/**
	 * Ajouter toutes les notices à la sélection pour constituer une collection en fonction des tris
	 */
	noticesToutesChoisies(): void {
		this.noticesServ.noticesAll.forEach(
			n => {
				n.selected = true;
			}
		)
		this.noticeSelection = this.noticesServ.noticesAll;
	}
	/**
	 * Ne sélectionner aucune notice
	 */
	noticesAucuneChoisie(): void {
		this.noticesServ.noticesAll.forEach(
			n =>{
				n.selected = false;
			}
		)
		this.noticeSelection = [];
	}
	/**
	 * Masque la notice lorsqu'on clique sur le bouton pour la fermer
	 * @param bool Booléen pour fermer la fenêtre (false)
	 */
	masque(bool:boolean){
		this.afficheDetailNotice = bool;
		this.afficheDetailCollec = bool;
		this.idNotice = -1;
		this.idCollection = -1;
	}
	/**
	 * Créer ou visualiser une collection
	 * @param id ID de la collection à afficher. -1 veut dire qu'on en crée une nouvelle
	 */
	collectionOnAffiche(id=-1){
		this.idCollection = id;
		this.afficheDetailCollec = true;
	}
	fake(){
		
	}
}
