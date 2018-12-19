import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CollectionModel } from '../modeles/collection.modele';


@Injectable({
	providedIn: 'root'
})
export class CollectionService {

	dataStorage: string = 'assets/dataStorage/';

	dataCollections: CollectionModel[];

	constructor(private http: HttpClient) {
		this.getCollections();
	}

	getCollections(): void {
		this.readCollections().subscribe(data => {
			this.dataCollections = data;
		})
	}

	readCollections(): Observable<CollectionModel[]> {
		return this.http.get<CollectionModel[]>(this.dataStorage + 'collections.json');
	}
}
