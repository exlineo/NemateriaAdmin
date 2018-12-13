import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NoticeModel } from "../modeles/notice.modele";

@Injectable({
	providedIn: 'root'
})
export class NoticeService {

	dataStorage: string = 'assets/dataStorage/';

	dataNotices: NoticeModel[];

	constructor(private http: HttpClient) {
		this.getNotices();
	}

	getNotices(): void {
		this.readNotices().subscribe(data => {
			this.dataNotices = data;
		})
	}

	readNotices(): Observable<NoticeModel[]> {
		return this.http.get<NoticeModel[]>(this.dataStorage + 'notices.json');
	}
}
