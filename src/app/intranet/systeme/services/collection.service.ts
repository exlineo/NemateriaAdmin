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

	collections: Array<CollectionModel>; // La liste des collections
	collection:CollectionModel; // Une collection sélectionnée
	series:Array<any>; // Tableau des séries d'une collection donnée

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
	/**
	 * Renvoyer une collection du tableau en fonction de son _id
	 * @param id _id de la notice à récupérer
	 * @return NoticeModel (une notice)
	 */
	getCollection(id: number | string):CollectionModel {
		for(let c of this.collections){
			if(c._id == id){
				return c;
			}
		}
	}
	/**
	 * Mise à jour d'une collection
	 */
	majCollection(id){
		this.http.put(SERV+'collections', this.collection).subscribe(
			retour => {
				console.log(retour);
			}
		)
	}
	/**
	 * Ajouter une collection
	 */
	ajouteCollection(){
		this.http.post(SERV+'collections', this.collection).subscribe(
			retour => {
				console.log(retour);
			}
		)
	}
	/**
	 * Les séries d'une collection
	 * @param id ID de la collection dont nous recherchons les séries
	 */
	getSeries(id){
		this.http.get(SERV+'collections/'+id+'/series').subscribe(
			retour => {
				console.log(retour);
			}
		)
	}
}
