import { Component, OnInit } from '@angular/core';

import { UtilsService } from '../systeme/library/utils.service';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { MapInterface } from '../systeme/modeles/map.interface';
import { MappagesService } from '../systeme/services/mappages.service';

@Component({
  selector: 'app-mappages',
  templateUrl: './mappages.component.html',
  styleUrls: ['./mappages.component.css']
})
export class MappagesComponent implements OnInit {

  maps:Array<MapInterface>;
  filtres:Array<string>;

  constructor(public mapServ:MappagesService, public utils:UtilsService) { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
