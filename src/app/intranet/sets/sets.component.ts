import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../systeme/library/utils.service';
import { SetModel } from '../systeme/modeles/set';
import { SetsService } from '../systeme/services/sets.service';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.css']
})
export class SetsComponent implements OnInit {

  idSet:number | string;
  set:SetModel;

  afficheEnlever: boolean = false;
  afficheDocs:boolean = false;

	delete:boolean = false;
	edit:boolean = false;

  constructor(public setsServ:SetsService, public utils:UtilsService) { }

  ngOnInit(): void {
    
  }
  /**
   * Récupérer et afficher les détails d'un SET lorsqu'il est choisi
   * @param id _id du SET à afficher
   */
  setOnClick(id:any){
    this.idSet = id;
		// Identifier la collection cliquée
		this.set = this.setsServ.getSet(id);
  }
  /**
   * Eviter de lister les documents
   * @param c chaîne ou objet représentant une clé dans un objet listé
   */
  getDocs(c:string){
    if(c != 'documents') return true;
    return false;
  }
  /**
	 * Enlever toutes les fenêtres pop-up et initialiser la collection et les notices
	 */
	masque(){
    this.edit = false;
    this.delete = false;
		this.afficheEnlever = false;
		this.idSet = null;
	}

}
