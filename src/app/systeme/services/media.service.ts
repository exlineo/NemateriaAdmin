import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MediaModel } from "../modeles/media.modele";

@Injectable({
	providedIn: 'root'
})
export class MediaService {

	initMedias: MediaModel[];

	lastId: number;

	constructor(private http: HttpClient) {
		this.initMedias = [];
		this.lastId = -1;
		this.loadIniMedias();
	}

	/**
	 * @method loadListe() - Retourne un obs. d'une req. de la liste des medias
	 * @returns {Observable}
	 */
	loadListe(): Observable<MediaModel[]> {
		return this.http.get<MediaModel[]>('assets/localStorage/media.json');
	}

	/**
	 * @method loadIniMedias() - Enregistre la liste des médias dans une variables
	 */
	loadIniMedias(): void {
		this.http.get<MediaModel[]>('assets/localStorage/media.json').subscribe(data => {
			this.initMedias = data;
			this.lastId = data.length;
		})
	}

	PostMedia(infoMedia): Observable<MediaModel> {
		let newMedia: MediaModel = { id: -1, type: 'NOTFOUND', name: 'NOTFOUND', directory: 'NOTFOUND', img: 'assets/img/default.jpg', description: 'NOTFOUND' };
		newMedia.id = this.lastId;
		newMedia.name = infoMedia.nom;
		newMedia.description = infoMedia.description;
		newMedia.type = infoMedia.type;
		if (infoMedia.url == '') 
			newMedia.img = 'http://localhost:4200/assets/img/default.jpg';
		else
			newMedia.img = infoMedia.url;

		console.log(newMedia);

		return this.http.post<MediaModel>('http://localhost:4200/assets/localStorage/media.json', newMedia);
	}

	PutMedia(media: MediaModel): Observable<MediaModel> {
		return this.http.put<MediaModel>('assets/localStorage/media.json', media);
	}
}
