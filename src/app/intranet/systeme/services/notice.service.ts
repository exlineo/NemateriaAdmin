import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERV } from '../config';
import { NoticeModel } from "../modeles/notice.modele";

@Injectable({
	providedIn: 'root'
})
export class NoticeService {

	dataStorage: string = 'assets/dataStorage/';

	noticesCollec:Array<NoticeModel>; // Des notices d'une collection donnée

	dataNotices: NoticeModel[];

	constructor(private http: HttpClient) {
		this.getNotices();
	}

	getNotices(): void {
	}

	getNoticesByCollec(id){
		this.noticesCollec = null;
		this.http.get<Array<NoticeModel>>(SERV+'notices', {params:{'idCollection':id}}).subscribe(
			data => {
				console.log(data);
				this.noticesCollec = data;
			}
		)
	}
	/**
	 * Renvoyer une notice du tableau en fonction de son _id
	 * @param id _id de la notice à récupérer
	 */
	getNotice(id: number | string):NoticeModel {
		// Tester si l'id de la news est de type ObjectId de MongoDB
		for(let i in this.dataNotices){
		  console.log(i);
		  if(this.dataNotices[i]['_id'] == id){
			console.log("Objet retourné", i);
			return this.dataNotices[i];
		  }
		}
	  }
}
