import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {

  connecte: boolean = false;
  connexionSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
  }
  // Créer un nouveau compte
  enregistre(login, mdp): Observable<any> {
    const body = { login, mdp };
    return this.http.post('assets/datas/id.json', body);
  }
  // S'identifier en utilisant un observable
  authentifier(ids): Observable<any> {
  /*
    console.log('||||');
    console.log(ids);
    console.log('||||');
    console.log(this.http.get('assets/datas/id.json', ids));
    console.log('||||');
  */
    this.stockConnexion(true);
    return this.http.get('assets/datas/id.json', ids);
  }
  // Stock l'enregistrement dans le local storage
  stockConnexion(tag: boolean) {
    this.connexionSub.next(tag);
    this.connecte = tag;
    window.localStorage.setItem('connexion', JSON.stringify(tag));
  }
}
