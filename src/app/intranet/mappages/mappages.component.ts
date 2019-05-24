import { Component, OnInit } from '@angular/core';

import { UtilsService } from '../systeme/library/utils.service';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { MapInterface } from '../systeme/modeles/map.interface';

@Component({
  selector: 'app-mappages',
  templateUrl: './mappages.component.html',
  styleUrls: ['./mappages.component.css']
})
export class MappagesComponent implements OnInit {

  maps:Array<MapInterface>;

  constructor(public utils:UtilsService) { }

  ngOnInit() {
  }

}
