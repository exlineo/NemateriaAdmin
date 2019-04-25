import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CollectionModel } from '../modeles/collection.modele';

import { SERV } from '../config';


@Injectable({
	providedIn: 'root'
})
export class CollectionService {

	// dataStorage: string = 'assets/dataStorage/';

	collections: Array<CollectionModel>;

	constructor(private http: HttpClient) {
		this.getCollections();
	}
	/**
	 * Récupérer l'ensemble des collections disponibles dans le depôt
	 */
	getCollections(): void {
		// return this.http.get<Array<CollectionModel>>(this.dataStorage + 'collections.json');
		this.http.get<Array<CollectionModel>>(SERV+'collections').subscribe(
			data => {
				console.log(data);
				this.collections = data;
			}
		)
	}
}
