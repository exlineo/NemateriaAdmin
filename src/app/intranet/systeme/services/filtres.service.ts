import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FiltreModel, Filtre } from '../modeles/filtre.modele';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FiltresService {

  filtres:Array<FiltreModel>;

  constructor(private http:HttpClient) {
		this.filtres = [new Filtre()];
		this.getFiltres();
  }
  /**
   * Récupérer la liste des filtres générés
   */
  getFiltres(){
    // return this.http.get<Array<CollectionModel>>(this.dataStorage + 'collections.json');
		this.http.get<Array<FiltreModel>>(environment.SERV+'filtres').subscribe(
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
		this.http.put(environment.SERV+'filtres', filtre).subscribe(
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
		this.http.post(environment.SERV+'filtres', filtre).subscribe(
			retour => {
				console.log(retour);
			},
			erreur => console.log(erreur)
		)
	}
}
