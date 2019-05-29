import { Component, OnInit } from '@angular/core';

import { UtilsService } from '../systeme/library/utils.service';

import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { MappagesService } from '../systeme/services/mappages.service';

import { Filtre } from '../systeme/modeles/filtre.modele';
import { FiltresService } from '../systeme/services/filtres.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mappages',
  templateUrl: './mappages.component.html',
  styleUrls: ['./mappages.component.css']
})
export class MappagesComponent implements OnInit {

  maps:Array<object>=[];
  filtre:Filtre;

  constructor(public mapServ:MappagesService, public utils:UtilsService, public filtreServ:FiltresService) { }

  ngOnInit() {
    this.filtre = new Filtre(); // Création d'un filtre vide
  }
  /**
   * Glisser / Déposer pour réorganiser la liste du mappage
   * @param event Evénement renvoyé par le liste de drags
   */
  drop(event: CdkDragDrop<string[]>) {
    console.log("Maps", this.maps);
    moveItemInArray(this.maps, event.previousIndex, event.currentIndex);
  }
  /**
   * Ajouter une métadonnée pour constituer un objet de mappage
   * @param m Métadonnée ajoutée au tableau des maps
   */
  selectItem(m){
    this.maps.push([m,m]);
  }
  /**
   * Supprimer un élément du mapping
   * @param i Index de l'élément à supprimer du tableau
   */
  supprime(i){
    this.maps.splice(i, 1);
  }
  /**
   * Envoyer le nouveau filtre pour l'enregistrer dans la base du serveur
   */
  valideFiltre(f?:NgForm){
    this.filtre.donnees = this.triMaps();
    this.filtreServ.ajouteFiltre(this.filtre);
  }
  /**
   * Filtrer les données du mappage pour en extraire les données de traitement
   */
  triMaps():Array<string>{
    let tmp:Array<string> = [];
    for(let m of this.maps){
      tmp.push(m[1]);
    }
    return tmp;
  }
}
