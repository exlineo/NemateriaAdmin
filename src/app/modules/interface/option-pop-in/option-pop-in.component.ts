import { Component, Inject } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { NotificationService } from "../../../systeme/services/notification.service";
import { MediaService } from "../../../systeme/services/media.service";
import { MediaModel } from "../../../systeme/modeles/media.modele";

@Component({
	selector: 'app-option-pop-in',
	templateUrl: './option-pop-in.component.html',
	styleUrls: ['./option-pop-in.component.css']
})
export class OptionPopInComponent {
	constructor(private bottomSheetRef: MatBottomSheetRef<OptionPopInComponent>, private notificationService: NotificationService, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any, private mediaService: MediaService) { }

	mediaSelected: MediaModel;

	openLink(event: MouseEvent): void {
		this.bottomSheetRef.dismiss();
		event.preventDefault();

		//this.notificationService.openSnackBar('Le media n°' + this.data.idMediaSelected +' à été séléctionner', 'event'); 
	}

	openFiche(event: MouseEvent): void {
		this.bottomSheetRef.dismiss();
		event.preventDefault();

		let root = 'home/ficheMedia/' + this.data.idMediaSelected;
		window.location.assign(root);
	}

}
