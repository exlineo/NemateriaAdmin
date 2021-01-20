import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/intranet/systeme/services/notification.service';
import { DocumentModel } from '../modeles/documents-model';
import { NoticeModel } from '../modeles/notice.modele';

@Injectable({
	providedIn: 'root'
})
export class NoticeService {

	noticesCollec: Array<NoticeModel>; // Des notices d'une collection donnée
	noticesAll: Array<NoticeModel>; // Récupérer la liste de toutes les notices...

	seriesCollec: Array<string> = []; // La liste des séries présentes dans les notices de la collection
	notice:NoticeModel; // Une notice sélectionnée et partagée

	constructor(private http: HttpClient, private notifServ: NotificationService) {
		// this.getNotices();
		this.notice = <NoticeModel>{};
	}
	/**
	 * Récupérer l'ensemble des notices disponibles
	 */
	getNotices(): void {
		this.http.get<Array<NoticeModel>>(environment.SERV + 'notices').subscribe(
			data => {
				console.log(data);
				this.noticesAll = data;
			},
			erreur => {
				console.log(erreur);
				this.notifServ.notif("Une erreur s'est produite dans l'enregistrement");
			}
		)
	}
	/**
	 * Récupérer les notices d'une collection
	 * @param id ID de la collection dont nous souhaitons les notices
	 */
	getNoticesByCollec(ids: Array<any>) {
		this.noticesCollec = [];
		// this.http.get<Array<NoticeModel>>(environment.SERV+'notices/collection/'+id, {params:{'idCollection':id}}).subscribe(
		this.http.post<Array<NoticeModel>>(environment.SERV + 'notices/collection', ids).subscribe(
			data => {
				// Transformation des données pour transformer le tableau fourni en objet (comme ce devrait être)
				if (Array.isArray(data[0].metadonnees)) {
					this.noticesCollec = data.map(n => {
						n.metadonnees = n.metadonnees[0];
						return n;
					});
				} else {
					this.noticesCollec = data;	
				}
				this.getSeries();
				this.notifServ.notif("Les notices ont été récupérées");
			},
			erreur => {
				console.log(erreur);
				this.notifServ.notif("Erreur dans la récupération des notices");
			}
		)
	}
	/**
	 * Renvoyer une notice du tableau en fonction de son _id
	 * @param id _id de la notice à récupérer
	 * @param select Ajouter select à la notice pour noter qu'elle a été sélectionnée
	 * @return DocumentModel (une notice)
	 */
	getNotice(id: number | string, select: boolean = false): void {
		this.notice = <NoticeModel>{};
		if(this.noticesCollec){
			this.notice = this.noticesCollec.find(n => n._id === id);
		};
		if(this.noticesAll){
			this.notice = this.noticesAll.find(n => n._id === id);
		};
	}
	/**
	 * Mettre à jour une notice
	 * @param notice ID de la notice à enlever de la collection
	 */
	updateNotice(id: string, notice: NoticeModel) {
		this.http.put(environment.SERV + 'notices/' + id, notice).subscribe(
			retour => {
				console.log(retour);
				this.notifServ.notif("Mise à jour de la notice effectuée");
			},
			erreur => {
				console.log(erreur);
				this.notifServ.notif("Une erreur s'est produite dans l'enregistrement");
			}
		)
	}
	/**
	 * Supprimer une notice
	 * @param id ID de la notice à supprimer
	 */
	supprNotice(id) {
		this.http.delete(environment.SERV + 'notices/' + id).subscribe(
			retour => {
				console.log(retour);
				this.notifServ.notif("La notice a été supprimée");
			},
			erreur => {
				console.log(erreur);
				this.notifServ.notif("Une erreur s'est produite dans l'enregistrement");
			}
		)
	}
	/**
	 * Récupérer la liste des séries depuis les notices chargées
	 */
	getSeries() {
		this.seriesCollec = [];
		// for(let s of this.noticesCollec){
		// 	if(s.relations.serie && this.seriesCollec.indexOf(s.relations.serie) == -1){
		// 		this.seriesCollec.push(s.relations.serie);
		// 	}
		// }
	}
}
