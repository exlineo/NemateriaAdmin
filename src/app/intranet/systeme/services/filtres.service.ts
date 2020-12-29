import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FiltreModel, Filtre } from '../modeles/filtre.modele';

import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/intranet/systeme/services/notification.service';

@Injectable({
	providedIn: 'root'
})
export class FiltresService {

	filtres: Array<FiltreModel>;

	constructor(private http: HttpClient, private notifServ: NotificationService) {
		this.filtres = [new Filtre()];
		this.getFiltres();
	}
	/**
	 * Récupérer la liste des filtres générés
	 */
	getFiltres() {
		// return this.http.get<Array<CollectionModel>>(this.dataStorage + 'collections.json');
		this.http.get<Array<FiltreModel>>(environment.SERV + 'filtres').subscribe(
			data => {
				console.log(data);
				this.filtres = data;
				this.notifServ.notif("Filtres chargés");
			},
			erreur => {
				console.log(erreur);
				this.notifServ.notif("Erreur dans le chargement du filtre");
			}
		)
	}

	/**
	   * Renvoyer un filtre du tableau en fonction de son _id
	   * @param id _id de la notice à récupérer
	   * @return FiltreModel (une notice)
	   */
	getFiltre(id: number | string): FiltreModel {
		for (let c of this.filtres) {
			if (c._id == id) {
				return c;
			}
		}
	}
	/**
	   * Mise à jour d'une collection
	   */
	majFiltre(filtre: FiltreModel) {
		this.http.put(environment.SERV + 'filtres', filtre).subscribe(
			retour => {
				console.log(retour);
				this.notifServ.notif("Filtre mis à jour");
			},
			erreur => {
				console.log(erreur);
				this.notifServ.notif("Erreur dans la mise à jour du filtre");
			}
		)
	}
	/**
	 * Ajouter un filtre
	 */
	ajouteFiltre(filtre: FiltreModel) {
		console.log(filtre);
		this.http.post(environment.SERV + 'filtres', filtre).subscribe(
			retour => {
				console.log(retour);
				this.notifServ.notif("Filtre enregistré");
				this.getFiltres();
			},
			erreur => {
				console.log(erreur);
				this.notifServ.notif("Erreur dans l'ajout du filtre");
			}
		)
	}

	/**
	 * Supprimer un filtre
	 */
	supprimeFiltre(id: string | number) {
		console.log(id);
		this.http.delete(environment.SERV + 'filtres/' + id).subscribe(
			retour => {
				console.log(retour);
				this.notifServ.notif("Filtre supprimé correctement");
				this.getFiltres();
			},
			erreur => {
				console.log(erreur);
				this.notifServ.notif("Erreur dans la suppression du filtre");
			}
		)
	}
	/**
	 * Afficher une notification
	 * @param msg Message de notification à afficher
	 */
	notif(msg:string){
		this.notifServ.notif(msg);
	}
}
