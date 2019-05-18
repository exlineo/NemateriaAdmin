import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../systeme/services/notification.service';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.css']
})
export class ActualitesComponent implements OnInit {

  constructor(public notifs:NotificationService) { }

  ngOnInit() {
  }

}
