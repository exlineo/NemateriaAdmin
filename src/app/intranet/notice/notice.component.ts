import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { CONST } from '../systeme/const';
import { NoticeService } from "../systeme/services/notice.service";
import { NoticeModel } from "../systeme/modeles/notice.modele";
import { UtilsService } from '../systeme/library/utils.service';

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

	update:boolean = false;

	constructor(public noticeService: NoticeService, public utils:UtilsService) { }

	ngOnInit() {
		console.log(this.notice);
		// Récupérer la notice à afficher
		if(this.idNotice != -1){
			this.notice = this.noticeService.getNotice(this.idNotice);
		}else{
			this.update = true;
			this.notice = <NoticeModel>{}; // Créer une notice vide
		}
	}
}
