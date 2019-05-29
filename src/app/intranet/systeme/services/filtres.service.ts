import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FiltreModel } from '../modeles/filtre.modele';

import { SERV } from '../config';


@Injectable({
  providedIn: 'root'
})
export class FiltresService {

  filtres:Array<FiltreModel>

  constructor(private http:HttpClient) { }

  getFiltres(){
    // return this.http.get<Array<CollectionModel>>(this.dataStorage + 'collections.json');
		this.http.get<Array<FiltreModel>>(SERV+'filtres').subscribe(
			data => {
				console.log(data);
				this.filtres = data;
			},
			erreur => console.log(erreur)
		)
  }

  /**
	 * Renvoyer un filtre du tableau en fonction de son _id
	 * @param id _id de la notice à récupérer
	 * @return FiltreModel (une notice)
	 */
	getFiltre(id: number | string):FiltreModel {
		for(let c of this.filtres){
			if(c._id == id){
				return c;
			}
		}
  }
  /**
	 * Mise à jour d'une collection
	 */
	majFiltre(filtre:FiltreModel){
		this.http.put(SERV+'filtres', filtre).subscribe(
			retour => {
				console.log(retour);
			},
			erreur => console.log(erreur)
		)
	}
	/**
	 * Ajouter une collection
	 */
	ajouteFiltre(filtre:FiltreModel){
    console.log(filtre);
		this.http.post(SERV+'filtres', filtre).subscribe(
			retour => {
				console.log(retour);
			},
			erreur => console.log(erreur)
		)
	}
}
