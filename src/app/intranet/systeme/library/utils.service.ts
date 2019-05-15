import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

    limite:number; // nombre de notices à charger à chaque état de pagination

  /**
   * Partage de méthodes dans les composants
   */
  constructor() {
    this.limite = 30;
  }

  /**
   * 
   * @param json Document JSON à traduire en HTML
   */
  setJsonListe(json:JSON){
    let html:string = '';
    
  }
}
