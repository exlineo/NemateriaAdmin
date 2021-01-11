import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CollectionModel } from '../modeles/collection.modele';

import { environment } from 'src/environments/environment';
import { SetModel } from '../modeles/set';
import { NotificationService } from 'src/app/intranet/systeme/services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class SetsService {
  // dataStorage: string = 'assets/dataStorage/';

  sets: Array<SetModel>; // La liste des collections
  set: SetModel; // Une collection sélectionnée
  series: Array<any>; // Tableau des séries d'une collection donnée

  constructor(private http: HttpClient, private notifServ: NotificationService) {
    console.log("Service des connexions");
    this.getSets();
  }
  /**
   * Récupérer l'ensemble des collections disponibles dans le depôt
   */
  getSets(): void {
    this.http.get<Array<SetModel>>(environment.SERV + 'sets').subscribe(
      data => {
        console.log("SETS", data);
        this.sets = data;
      },
      erreur => {
        console.log(erreur);
        this.notifServ.notif("Une erreur s'est produite dans l'enregistrement");
      }
    )
  }
  /**
   * Renvoyer une collection du tableau en fonction de son _id
   * @param id _id de la notice à récupérer
   * @return CollectionModel (une collection)
   */
  getSet(id: number | string): SetModel {
    for (let s of this.sets) {
      console.log(s);
      if (s._id == id) {
        return s;
      }
    }
  }
  /**
   * Mise à jour d'un SET
   */
  majSet(s: SetModel) {
    this.http.put(environment.SERV + 'sets/', s).subscribe(
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
  ajouteSet(s: SetModel) {
    console.log(this.set);
    this.http.post(environment.SERV + 'sets', s).subscribe(
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
  getFonds(f: string) {
    this.http.get(environment.SERV + 'sets/' + f).subscribe(
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
  supprSet(id) {
    this.http.delete(environment.SERV + 'sets/' + id).subscribe(
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