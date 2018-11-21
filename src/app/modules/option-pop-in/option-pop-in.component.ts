import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { NotificationService } from "../../systeme/services/notification.service";
import { MediaService } from "../../systeme/services/media.service";
import { MediaModel } from "../../systeme/modeles/media.modele";

@Component({
	selector: 'app-option-pop-in',
	templateUrl: './option-pop-in.component.html',
	styleUrls: ['./option-pop-in.component.css'],
	providers: [MediaService]
})
export class OptionPopInComponent {

	constructor(private bottomSheetRef: MatBottomSheetRef<OptionPopInComponent>, private notificationService: NotificationService, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any, private mediaService: MediaService) { }

	mediaSelected: MediaModel;

	openLink(event: MouseEvent): void {
		this.bottomSheetRef.dismiss();
		event.preventDefault();

		this.mediaSelected = this.mediaService.getMedia(this.data.idMediaSelected);

		this.notificationService.openSnackBar('Le media ' + this.mediaSelected.name +' à été séléctionner', 'event'); 
	}

	openFiche(event: MouseEvent): void {
		this.bottomSheetRef.dismiss();
		event.preventDefault();

		let root = 'ficheMedia/' + this.data.idMediaSelected;
		window.location.assign(root);
	}

}
