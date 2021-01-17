import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  limite:number; // nombre de notices à charger à chaque état de pagination
  params = {
    limite:20,
    langue:'fr_FR'
  }
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
    if(Array.isArray(value)){
      return 'array';
    }
		return typeof value;
  }
  /**
   * Tronquer un tableau pour une pagination
   * @param ar Tableau à tronquer
   * @param page Début et fin du slice sur le tableau
   */
  tronqueTab(ar:Array<any>, page:any){
    return ar.slice(page.min, page.max);
  }
  /**
   * Eviter de lister les documents
   * @param c chaîne ou objet représentant une clé dans un objet listé
   */
  getObj(c:any){
    if(typeof c !== 'object') return true;
    return false;
  }
}
