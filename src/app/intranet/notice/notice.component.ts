import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { CONST } from '../systeme/const';
import { NoticeService } from "../systeme/services/notice.service";
import { NoticeModel } from "../systeme/modeles/notice.modele";
import { FiltrePipe } from "../systeme/pipes/filtre.pipe";
import { useAnimation, transition, trigger, style, animate, state } from '@angular/animations';
//import { toggleLeft } from '../systeme/library/animation';

@Component({
	selector: 'app-notice',
	templateUrl: './notice.component.html',
	styleUrls: ['./notice.component.css'],
	
})
export class NoticeComponent implements OnInit {

	@Input()
	notice: NoticeModel;

	@Input()
	idNotice: number | string;
	
	@Output()
	fermer = new EventEmitter<boolean>();

	constructor(public noticeService: NoticeService) { }

	ngOnInit() {
		console.log(this.notice);
		
	}
	masqueNotice(){

	}
}
