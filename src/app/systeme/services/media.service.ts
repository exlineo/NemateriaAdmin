import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { MediaModel } from "../modeles/media.modele";

@Injectable({
  providedIn: 'root'
})
export class MediaService {

	mediaListe: MediaModel[];

	mediaListe$: BehaviorSubject<MediaModel[]> = new BehaviorSubject<MediaModel[]>([]);

	constructor(private http: HttpClient) {
		this.getListe();
	}

	getListe() {
		this.http.get<MediaModel[]>('assets/localStorage/media.json')
			.subscribe(data => {
				this.mediaListe = data;
				this.mediaListe$.next(data);
			})
	}

	getMedia(idMedia: number) {
		let media = this.mediaListe$.getValue();
		return media[idMedia];
	}
}
