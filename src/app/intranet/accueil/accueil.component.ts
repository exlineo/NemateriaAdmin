import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../systeme/services/collection.service';
import { NoticeService } from '../systeme/services/notice.service';
import { CollectionModel } from '../systeme/modeles/collection.modele';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  collec:CollectionModel;

  constructor(public colServ:CollectionService, public noticesServ:NoticeService) { }

  ngOnInit() {
  }

}
