import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { OptionPopInComponent } from "../option-pop-in/option-pop-in.component";
import { MediaService } from '../../../systeme/services/media.service';
import { MediaModel } from '../../../systeme/modeles/media.modele';

@Component({
	selector: 'app-liste-media',
	templateUrl: './liste-media.component.html',
	styleUrls: ['./liste-media.component.css']
})
export class ListeMediaComponent implements OnInit {

	mediaListe: MediaModel[];

	constructor(public mediaService: MediaService, private bottomSheet: MatBottomSheet) { }

	ngOnInit() {
		// this.getMediaListe();
	}

	/*
	getMediaListe(): void {
		this.mediaService.loadListe().subscribe(data => {
			this.mediaListe = data;
		})
	}
	*/

	/**
	 * @method openBottomSheet() - Ouvre les options du media selectione
	 * @param {number} idMedia - id du media selectione
	 */
	openBottomSheet(idMedia: number): void {
		this.bottomSheet.open(OptionPopInComponent, {
		data: { idMediaSelected: idMedia },
		});
	}

}
