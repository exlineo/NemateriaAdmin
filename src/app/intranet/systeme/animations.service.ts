import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {

  leftPanelIsOpen = true; // Etat d'ouverture du panneau de gauche
  rightPanelIsOpen = true; // Etat d'ouverture du panneau de droite
  
  constructor() { }

  /**
	 * Ouvrir ou fermer le panneau de gauche
	 * @param $event Evénement du clic
	 */
	toggleLeftPanel($event): void {
		$event.preventDefault();
		this.leftPanelIsOpen = !this.leftPanelIsOpen;
	}
	/**
	 * Ouvrir ou fermer le panneau de droite
	 * @param $event Evénement du clic
	 */
	toggleRightPanel($event): void {
		$event.preventDefault();
		this.rightPanelIsOpen = !this.rightPanelIsOpen;
	}
	/**
	 * Afficher ou fermer une élément HTML
	 * @param id Id de l'élément HTML a afficher
	 */
	togglePan(id){
		let series = document.querySelector('#'+id);
		console.log(series);
		series.classList.toggle('ferme');
  }
}
