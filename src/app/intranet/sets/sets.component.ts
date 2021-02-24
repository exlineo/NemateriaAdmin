import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UtilsService } from '../systeme/library/utils.service';
import { DocumentModel } from '../systeme/modeles/documents-model';
import { SetModel } from '../systeme/modeles/set';
import { SetsService } from '../systeme/services/sets.service';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.css']
})
export class SetsComponent implements OnInit {

  idSet:number | string;
  miniDocs:Array<DocumentModel>; // Pagination dans les documents du SET sélectionné
  afficheDocs:boolean = false;
  creeCollec:boolean = false;
	delete:boolean = false;
  edit:boolean = false;
  page: any;
  
  constructor(public setsServ:SetsService, public utils:UtilsService) { }

  ngOnInit(): void {
		this.page = { min: 0, max: 20 };
  }
  /**
   * Récupérer et afficher les détails d'un SET lorsqu'il est choisi
   * @param id _id du SET à afficher
   */
  setOnClick(id:any){
    this.idSet = id;
		// Identifier la collection cliquée
    this.setsServ.getSet(id);
    this.afficheDocs = false;
    this.setMiniDocs();
  }
  /**
   * Constituer un tableau tronqué
   */
  setMiniDocs(){
    this.miniDocs = this.utils.tronqueTab(this.setsServ.set.documents, this.page);
    console.log(this.miniDocs);
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
    this.idSet = null;
    this.creeCollec = false;
  }
  /**
	 * Pagination des données scannées
	 * @param n Nombre à faire évoluer pour la pagination
	 */
	pagine(n: number) {
		this.page.min += n;
    this.page.max += n;
    console.log(this.page);
    this.setMiniDocs();
	}
}
