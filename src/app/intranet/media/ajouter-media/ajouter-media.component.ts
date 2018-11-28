// Angular Library
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Service
import { MediaService } from "src/app/intranet/systeme/services/media.service";
import { NotificationService } from "src/app/intranet/systeme/services/notification.service";

// Model
import { MediaModel } from 'src/app/intranet/systeme/modeles/media.modele';

@Component({
	selector: 'app-ajouter-media',
	templateUrl: './ajouter-media.component.html',
	styleUrls: ['./ajouter-media.component.css']
})
export class AjouterMediaComponent implements OnInit {

	mediaForm: FormGroup;
	newMedia: MediaModel;

	constructor(public mediaService: MediaService, private notService: NotificationService) { }

	ngOnInit() {
		this.newMedia = {
			_id: -1,
			type: 'undefined',
			nom: 'undefined',
			description: 'undefined',
			dossier: 'assets/img/',
			fichier: 'default.jpg'
		};
		this.mediaForm = new FormGroup({
			nom: new FormControl('test', [
				Validators.required
			]),
			type: new FormControl('image', [
				Validators.required
			]),
			description: new FormControl('test', [
				Validators.required
			]),
			url: new FormControl('test')
		});
	}

	/**
	 * @method save() - Sauvegarde les informations en base de données
	 */
	save() {
		if (this.mediaForm.valid) {
			this.newMedia._id = -1;
			this.newMedia.nom = this.mediaForm.value.nom;
			this.newMedia.type = this.mediaForm.value.type;
			this.newMedia.description = this.mediaForm.value.description;
			this.newMedia.dossier = 'test'
			this.newMedia.fichier = this.mediaForm.value.url;
			this.newMedia.created = Date.now();
			this.newMedia.updated = Date.now();

			this.mediaService.createMedia(this.newMedia).subscribe(
				() => {
					this.mediaService.initMedias.push(this.newMedia);
					this.notService.openSnackBar('Le média à été ajouter.', 'serveur');
				}
			)
		}
		else
			this.notService.openSnackBar('Formulaire nom remplis', 'Formulaire');
	}

	/**
	 * @method reset() - Reinitialise le formulaire
	 */
	reset() {
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
}
