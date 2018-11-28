// Angular Library
import { Component, OnInit } from '@angular/core';

// Extern Library
import { MatSnackBar, MatBottomSheet, MatBottomSheetRef } from '@angular/material';

// UI Component
import { OptionPopInComponent } from 'src/app/intranet/partage/option-pop-in/option-pop-in.component';

// Service
import { MediaService } from 'src/app/intranet/systeme/services/media.service';
import { AuthService } from 'src/app/extranet/systeme/services/auth.service';
import { MediaModel } from '../../systeme/modeles/media.modele';

@Component({
	selector: 'app-liste-media',
	templateUrl: './liste-media.component.html',
	styleUrls: ['./liste-media.component.css']
})
export class ListeMediaComponent implements OnInit {

	showGrille: boolean = false;
	showListe: boolean = true;
	//*ngIf="formatListe" {{medias.selectedOptions.selected.length}}

	constructor(public mediaService: MediaService, private bottomSheet: MatBottomSheet, public authService: AuthService) { }

	ngOnInit() {
		
	}

	changeFormat(format) {
		if (format == 'grille') {
			this.showGrille = true;
			this.showListe = false;
		} else {
			this.showGrille = false;
			this.showListe = true;
		} 
	}

	/**
	 * @method openBottomSheet() - Ouvre les options du media selectione
	 * @param {number} idMedia - id du media selectione
	 */
	openBottomSheet(idMedia: number): void {
		this.bottomSheet.open(OptionPopInComponent, {
		data: { idMediaSelected: idMedia },
		});
	}

	onKey(filtre) {
		if (filtre.length > 2) {
			let filtreArray: Array<MediaModel> = [];
			let saveArray: Array<MediaModel> = this.mediaService.initMedias;
			for (let index = 0; index < saveArray.length; index++) {
				if (saveArray[index].nom.search(filtre) != -1) {
					filtreArray.push(saveArray[index]);
				}
			} 
			this.mediaService.initMedias = filtreArray;
		} else {
			this.mediaService.loadAllMedias();
		}
	}
}