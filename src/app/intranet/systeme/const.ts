import { Injectable } from '@angular/core';
/**
 * @type Injectable
 * Définition des constantes de l'applications
 */
@Injectable({
  providedIn: 'root'
})
export class CONST {

  public static delai:string='0.3s'; // Délai de base des animations
  public static lg:string='200px'; // Largeur de la colonne de gauche
  public static ld:string='300px'; // Largeur de la colonne de droite
  public static lm:string='50%'; // Partage de la largeur de l'écran

  public static col:string='50%'; // Taille par défaut des colonnes, notammentpour les notices

  constructor() {}
}
