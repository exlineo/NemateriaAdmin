import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CollectionModel } from '../modeles/collection.modele';

import { environment } from 'src/environments/environment';
import { SetModel } from '../modeles/set';
import { NotificationService } from 'src/app/intranet/systeme/services/notification.service';
import { CollectionService } from './collection.service';

@Injectable({
  providedIn: 'root'
})
export class SetsService {
  // dataStorage: string = 'assets/dataStorage/';

  sets: Array<SetModel>; // La liste des collections
  set: SetModel; // Un SET sélectionnée
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
  getSet(id: number | string): void {
    for (let s of this.sets) {
      if (s._id == id) {
        this.set = s;
      }
    }
  }
  /**
   * Supprimer la collection
   * @param id ID de la collection à supprimer
   */
  supprSet(id:any) {
    this.http.delete(environment.SERV + 'sets/' + id).subscribe(
      retour => {
        this.sets.splice(this.sets.findIndex(s => s._id == id), 1);
      },
      erreur => {
        console.log(erreur);
        this.notifServ.notif("Une erreur s'est produite dans l'enregistrement");
      }
    )
  }
  /**
   * Mise à jour d'un SET
   */
  majSet(s: SetModel) {
    this.http.put(environment.SERV + 'sets/'+s._id, s).subscribe(
      retour => {
        this.notifServ.notif("Le SET a été mis à jour");
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
    this.http.post(environment.SERV + 'sets', s).subscribe(
      retour => {
        console.log(retour);
        this.notifServ.notif("Le SET a été ajouté");
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
        this.notifServ.notif("La liste des fonds a été obtenue");
      },
      erreur => {
        console.log(erreur);
        this.notifServ.notif("Une erreur s'est produite dans l'enregistrement");
      }
    )
  }
}
