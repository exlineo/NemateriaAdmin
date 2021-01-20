import { Component, OnInit, EventEmitter, Input, Output, OnDestroy } from '@angular/core';

import { NoticeService } from "../systeme/services/notice.service";
import { NoticeModel } from "../systeme/modeles/notice.modele";
import { UtilsService } from '../systeme/library/utils.service';

@Component({
	selector: 'app-notice',
	templateUrl: './notice.component.html',
	styleUrls: ['./notice.component.css'],
	
})
export class NoticeComponent implements OnInit, OnDestroy {
	@Input()
	idNotice: number | string;
	
	@Output()
	fermer = new EventEmitter<boolean>();
	update:boolean = false;

	constructor(public noticeServ: NoticeService, public utils:UtilsService) {
		this.noticeServ.getNotice(this.idNotice);
	}

	ngOnInit() {
		console.log(this.idNotice);
		this.noticeServ.getNotice(this.idNotice);
		try{
			this.noticeServ.getNotice(this.idNotice);
			console.log("try");
		}catch{
			this.update = true;
			this.noticeServ.notice = <NoticeModel>{}; // Créer une notice vide
		}
		console.log(this.noticeServ.notice);
		// Récupérer la notice à afficher
		// if(this.idNotice){
		// 	this.noticeServ.getNotice(this.idNotice);
		// }else{
		// 	this.update = true;
		// 	this.noticeServ.notice = <NoticeModel>{}; // Créer une notice vide
		// }
	}
	ngOnDestroy(){
		this.noticeServ.notice = <NoticeModel>{};
	}
}
