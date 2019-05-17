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
   * Connaître le type d'un objet
   * @param value Valeur dont on veut connaître le type
   */
  typeOf(value) {
		if(typeof value === 'object' && value.length){
			// return 'array';
		}
		return typeof value;
	}
}
