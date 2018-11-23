import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MediaService } from "../../../systeme/services/media.service";
import { NotificationService } from "../../../systeme/services/notification.service";
import { MediaModel } from 'src/app/systeme/modeles/media.modele';

@Component({
	selector: 'app-modifier-media',
	templateUrl: './modifier-media.component.html',
	styleUrls: ['./modifier-media.component.css']
})
export class ModifierMediaComponent implements OnInit {

	mediaForm: FormGroup;

	mediaModif: MediaModel;

	constructor(public mediaService: MediaService, private notService: NotificationService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.mediaModif = { id: -1, type: 'NOTFOUND', name: 'NOTFOUND', directory: 'NOTFOUND', img: 'assets/img/default.jpg', description: 'NOTFOUND' };
		this.getMediaModif();
		this.mediaForm = new FormGroup({
			nom: new FormControl(this.mediaModif.name, [
				Validators.required
			]),
			type: new FormControl({value: this.mediaModif.type, disabled: true}),
			description: new FormControl(this.mediaModif.description, [
				Validators.required
			]),
			url: new FormControl(this.mediaModif.img)
		});
	}

	/**
	 * @method getIdSelected() - Recupere dans la root l'id du media selectionne
	 * @returns {number} id - l'id du media selectionne
	 */
	getIdSelected(): number {
		const id = +this.route.snapshot.paramMap.get('id');
		return id;
	}

	/**
	 * @method getMediaModif() - Recupere les infos du media selectionne
	 */
	getMediaModif(): void {
		this.mediaModif = this.mediaService.initMedias.find(media => media.id == this.getIdSelected());
		console.log(this.mediaModif);
	}

	updateMedia() {
		if (this.mediaForm.valid) {
			this.mediaModif.name = this.mediaForm.value.nom;
			this.mediaModif.description = this.mediaForm.value.description;
			this.mediaModif.img = this.mediaForm.value.url;

			this.mediaService.PutMedia(this.mediaForm.value).subscribe(
				newMedia => {
					this.mediaService.loadIniMedias();
					console.log(this.mediaService.initMedias);
				},
				error => {
					console.warn(error);
					this.notService.openSnackBar('Une erreur de connexion avec le serveur est survenu.', 'connexion');
				}
			);
		}
		else
			this.notService.openSnackBar('Formulaire nom remplis', 'Formulaire');
	}

}
