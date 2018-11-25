import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MediaModel } from "../modeles/media.modele";

@Injectable({
	providedIn: 'root'
})
export class MediaService {

	initMedias: MediaModel[];

	dataStorage: string = 'http://localhost:8080/api/';

	constructor(private http: HttpClient) {
		this.initMedias = [];
		this.loadAllMedias();
	}

	/**
	 * @method createMedia() - Retourne un obs. d'un create de media
	 * @returns {Observable}
	 */
	createMedia(media: MediaModel): Observable<MediaModel[]> {
		return this.http.post<MediaModel[]>(this.dataStorage + 'medias/', media);
	}

	/**
	 * @method readMedia() - Retourne un obs. d'un read de media
	 * @returns {Observable}
	 */
	readMedia(idMedia: number): Observable<MediaModel[]> {
		return this.http.get<MediaModel[]>(this.dataStorage + 'medias/' + idMedia);
	}

	/**
	 * @method createMedia() - Retourne un obs. d'un update de media
	 * @returns {Observable}
	 */
	updateMedia(media: MediaModel): Observable<MediaModel[]> {
		return this.http.put<MediaModel[]>(this.dataStorage + 'medias/' + media.id, media);
	}

	/**
	 * @method createMedia() - Retourne un obs. d'un delete de media
	 * @returns {Observable}
	 */
	deleteMedia(media: MediaModel): Observable<MediaModel[]> {
		return this.http.delete<MediaModel[]>(this.dataStorage + 'medias/' + media.id);
	}

	/**
	 * @method readAllMedia() - Retourne un obs. d'un read de tous les medias
	 * @returns {Observable}
	 */
	readAllMedia(): Observable<MediaModel[]> {
		return this.http.get<MediaModel[]>(this.dataStorage + 'medias/');
	}



	/**
	 * @method loadAllMedias() - Enregistre la liste des médias dans une variables
	 */
	loadAllMedias(): void {
		this.readAllMedia().subscribe(data => {
			this.initMedias = data;
		})
	}

	/**
	 * @method testCrudMedia() - test du service
	 * @returns {Observable}
	 */
	testCrudMedia() {

		/*
		//read
		let testMedia: MediaModel;
		this.readMedia(1).subscribe(
			data => {
				testMedia = data[0];
				console.log(testMedia);
			}
		);
		*/

		/*
		//update
		let testMedia: MediaModel;
		this.readMedia(1).subscribe(
			data => {
				testMedia = data[0];
				console.log(testMedia);
				testMedia.name += ' test';
				this.updateMedia(testMedia).subscribe(
					() => {
						this.readMedia(1).subscribe(
							data => {
								testMedia = data[0];
								console.log(testMedia);
							}
						);
					}
				);
			}
		);
		*/

		//create
		/*
		this.readAllMedia().subscribe(
			data => {
				console.log(data);
				let mediaTest = data[0];
				mediaTest.id = data.length;
				this.createMedia(mediaTest).subscribe(
					() => {
						this.readAllMedia().subscribe(
							data => {
								console.log(data);
							}
						);
					}
				)
			}
		)
		*/

		//delete
		/*
		this.readAllMedia().subscribe(
			data => {
				console.log(data);
				let idTest = data.length-1;
				let mediaTest = data[idTest];
				this.deleteMedia(mediaTest).subscribe(
					() => {
						this.readAllMedia().subscribe(
							data => {
								console.log(data);
							}
						)
					}
				);
			}
		)
		*/
	}
}
