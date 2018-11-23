import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MediaService } from "../../../systeme/services/media.service";
import { NotificationService } from "../../../systeme/services/notification.service";

@Component({
	selector: 'app-nouveau-media',
	templateUrl: './nouveau-media.component.html',
	styleUrls: ['./nouveau-media.component.css']
})
export class NouveauMediaComponent implements OnInit {

	mediaForm: FormGroup;

	constructor(public mediaService: MediaService, private notService: NotificationService) { }

	ngOnInit() {
		this.mediaForm = new FormGroup({
			nom: new FormControl('', [
				Validators.required
			]),
			type: new FormControl('', [
				Validators.required
			]),
			description: new FormControl('', [
				Validators.required
			]),
			url: new FormControl('')
		});
	}

	setMedia() {
		if (this.mediaForm.valid) {
			this.mediaService.PostMedia(this.mediaForm.value).subscribe(
				newMedia => {
					this.mediaService.initMedias.push(newMedia)
					console.log(this.mediaService.initMedias);
				},
				error => {
					console.warn(error);
					this.notService.openSnackBar('Une erreur de connexion avec le serveur est survenu.', 'connexion')
				}
			);
		}
		else
			console.log('Formulaire nom remplis');
	}

}
