// Angular Library
import { Component, OnInit } from '@angular/core';

// Extern Library
import { MatSnackBar, MatBottomSheet, MatBottomSheetRef } from '@angular/material';

// UI Component
import { OptionPopInComponent } from 'src/app/intranet/partage/option-pop-in/option-pop-in.component';
import { HeaderComponent } from 'src/app/intranet/partage/header/header.component';
import { SidenavComponent } from 'src/app/intranet/partage/sidenav/sidenav.component';

// Service
import { MediaService } from 'src/app/intranet/systeme/services/media.service';

@Component({
	selector: 'app-liste-media',
	templateUrl: './liste-media.component.html',
	styleUrls: ['./liste-media.component.css']
})
export class ListeMediaComponent implements OnInit {

	constructor(public mediaService: MediaService, private bottomSheet: MatBottomSheet) { }

	ngOnInit() {
		
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

}
