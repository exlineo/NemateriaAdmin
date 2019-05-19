import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../systeme/services/collection.service';
import { NoticeService } from '../systeme/services/notice.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(public colServ:CollectionService, public noticesServ:NoticeService) { }

  ngOnInit() {
  }

}
