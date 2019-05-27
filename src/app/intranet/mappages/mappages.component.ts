import { Component, OnInit } from '@angular/core';

import { UtilsService } from '../systeme/library/utils.service';

import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { MappagesService } from '../systeme/services/mappages.service';

@Component({
  selector: 'app-mappages',
  templateUrl: './mappages.component.html',
  styleUrls: ['./mappages.component.css']
})
export class MappagesComponent implements OnInit {

  maps:Array<object>=[];

  constructor(public mapServ:MappagesService, public utils:UtilsService) { }

  ngOnInit() {
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
}
