import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MediaModel } from "../modeles/media.modele";

@Injectable({
  providedIn: 'root'
})
export class MediaService {

	initMedias:MediaModel[];

	constructor(private http: HttpClient) {
		this.initMedias = [];
		this.loadIniMedias();
	}

	loadListe(): Observable<MediaModel[]> {
		return this.http.get<MediaModel[]>('assets/localStorage/media.json');
	}

	loadIniMedias(){
		this.http.get<MediaModel[]>('assets/localStorage/media.json').subscribe(data => {
			this.initMedias = data;
		})
	}
}
