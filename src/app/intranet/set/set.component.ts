import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { SetModel } from '../systeme/modeles/set';
import { SetsService } from '../systeme/services/sets.service';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css']
})
export class SetComponent implements OnInit {

  @Input() set:SetModel;

  @Output()
	fermer = new EventEmitter<boolean>();

  constructor(public setsServ:SetsService) { }

  ngOnInit(): void {
    
  }

}
