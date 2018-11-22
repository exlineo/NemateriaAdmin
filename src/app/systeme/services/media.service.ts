import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MediaModel } from "../modeles/media.modele";

@Injectable({
  providedIn: 'root'
})
export class MediaService {

	constructor(private http: HttpClient) { }

	loadListe(): Observable<MediaModel[]> {
		return this.http.get<MediaModel[]>('assets/localStorage/media.json');
	}
}
