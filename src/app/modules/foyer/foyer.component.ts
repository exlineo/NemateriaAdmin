import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { OptionPopInComponent } from "../option-pop-in/option-pop-in.component";
import { MediaService } from '../../systeme/services/media.service';
import { MediaModel } from '../../systeme/modeles/media.modele';

@Component({
    selector: 'app-foyer',
    templateUrl: './foyer.component.html',
	styleUrls: ['./foyer.component.css'],
	providers: [MediaService]
})
export class FoyerComponent implements OnInit {

	mediaListe: MediaModel[];
	
	constructor(private mediaService: MediaService, private bottomSheet: MatBottomSheet) { }

    ngOnInit() {
		this.mediaListe = this.mediaService.mediaListe$.getValue(); // Si le tableau est déjà chargé
		
		this.mediaService.mediaListe$.subscribe(
			data => {
				this.mediaListe = data;
			});
	}

	openBottomSheet(idMedia: number): void {
		this.bottomSheet.open(OptionPopInComponent, {
			data: { idMediaSelected: idMedia },
		});
	}

}
