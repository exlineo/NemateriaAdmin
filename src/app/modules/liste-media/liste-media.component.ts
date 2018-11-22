import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { OptionPopInComponent } from "../option-pop-in/option-pop-in.component";
import { MediaService } from '../../systeme/services/media.service';
import { MediaModel } from '../../systeme/modeles/media.modele';


@Component({
	selector: 'app-liste-media',
	templateUrl: './liste-media.component.html',
	styleUrls: ['./liste-media.component.css'],
	providers: [MediaService]
})
export class ListeMediaComponent implements OnInit {

	mediaListe: MediaModel[];

	constructor(private mediaService: MediaService, private bottomSheet: MatBottomSheet) { }

	ngOnInit() {
		this.getMediaListe();
	}

	getMediaListe(): void {
		this.mediaService.loadListe().subscribe(data => {
			this.mediaListe = data;
		})
	}

	openBottomSheet(idMedia: number): void {
		this.bottomSheet.open(OptionPopInComponent, {
		data: { idMediaSelected: idMedia },
		});
	}

}
