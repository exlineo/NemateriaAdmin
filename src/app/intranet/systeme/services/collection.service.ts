import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CollectionModel } from '../modeles/collection.modele';

import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/intranet/systeme/services/notification.service';

@Injectable({
	providedIn: 'root'
})
export class CollectionService {

	// dataStorage: string = 'assets/dataStorage/';

	collections: Array<CollectionModel>; // La liste des collections
	collection:CollectionModel; // Une collection sélectionnée
	series:Array<any>; // Tableau des séries d'une collection donnée

	constructor(private http: HttpClient, private notifServ:NotificationService) {
		this.getCollections();
	}
	/**
	 * Récupérer l'ensemble des collections disponibles dans le depôt
	 */
	getCollections(): void {
		this.http.get<Array<CollectionModel>>(environment.SERV+'collections').subscribe(
			data => {
				this.collections = data;
			}
		)
	}
	/**
	 * Renvoyer une collection du tableau en fonction de son _id
	 * @param id _id de la notice à récupérer
	 * @return CollectionModel (une collection)
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
	majCollection(collec:CollectionModel){
		this.http.put(environment.SERV+'collections/', collec).subscribe(
			retour => {
				console.log(retour);
			},
			erreur => {
				console.log(erreur);
				this.notifServ.notif("Une erreur s'est produite dans l'enregistrement");
			}
		)
	}
	/**
	 * Ajouter une collection
	 */
	ajouteCollection(collec:CollectionModel){
		this.http.post(environment.SERV+'collections', collec).subscribe(
			retour => {
				console.log(retour);
			},
			erreur => {
				console.log(erreur);
				this.notifServ.notif("Une erreur s'est produite dans l'enregistrement");
			}
		)
	}
	/**
	 * Les séries d'une collection
	 * @param id ID de la collection dont nous recherchons les séries
	 */
	getSeries(id){
		this.http.get(environment.SERV+'collections/'+id+'/series').subscribe(
			retour => {
				console.log(retour);
			},
			erreur => {
				console.log(erreur);
				this.notifServ.notif("Une erreur s'est produite dans l'enregistrement");
			}
		)
	}
	/**
	 * Supprimer la collection
	 * @param id ID de la collection à supprimer
	 */
	supprCollection(id){
		this.http.delete(environment.SERV+'collections/'+id).subscribe(
			retour => {
				console.log(retour);
			},
			erreur => {
				console.log(erreur);
				this.notifServ.notif("Une erreur s'est produite dans l'enregistrement");
			}
		)
	}
}
