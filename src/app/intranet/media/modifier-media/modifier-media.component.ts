// Angular Library
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

// Service
import { MediaService } from "src/app/intranet/systeme/services/media.service";
import { NotificationService } from "src/app/intranet/systeme/services/notification.service";

// Model
import { MediaModel } from 'src/app/intranet/systeme/modeles/media.modele';

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
		this.mediaModif = { 
			id: -1, 
			type: 'undefined', 
			name: 'undefined', 
			directory: 'undefined', 
			img: 'assets/img/default.jpg', 
			description: 'undefined' 
		};
		this.mediaForm = new FormGroup({
			nom: new FormControl(this.mediaModif.name, [
				Validators.required
			]),
			type: new FormControl({ value: this.mediaModif.type, disabled: true }),
			description: new FormControl(this.mediaModif.description, [
				Validators.required
			]),
			url: new FormControl(this.mediaModif.img)
		});
		this.getMediaModif();
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
		if (this.mediaService.initMedias.length == 0) {
			this.mediaService.readAllMedia().subscribe(
				data => {
					this.mediaService.initMedias = data;
					this.mediaModif = this.mediaService.initMedias.find(media => media.id == this.getIdSelected());
					this.mediaForm = new FormGroup({
						nom: new FormControl(this.mediaModif.name, [
							Validators.required
						]),
						type: new FormControl({ value: this.mediaModif.type, disabled: true }),
						description: new FormControl(this.mediaModif.description, [
							Validators.required
						]),
						url: new FormControl(this.mediaModif.img)
					});
				}
			)
		} else {
			this.mediaModif = this.mediaService.initMedias.find(media => media.id == this.getIdSelected());
			this.mediaForm = new FormGroup({
				nom: new FormControl(this.mediaModif.name, [
					Validators.required
				]),
				type: new FormControl({ value: this.mediaModif.type, disabled: true }),
				description: new FormControl(this.mediaModif.description, [
					Validators.required
				]),
				url: new FormControl(this.mediaModif.img)
			});
		}
			
	}

	/**
	 * @method save() - Sauvegarde les informations en base de données
	 */
	save() {
		if (this.mediaForm.valid) {
			this.mediaModif.name = this.mediaForm.value.nom;
			this.mediaModif.description = this.mediaForm.value.description;
			this.mediaModif.img = this.mediaForm.value.url;

			this.mediaService.updateMedia(this.mediaModif).subscribe(
				() => {
					this.notService.openSnackBar('Le média à été modifier.', 'serveur');
				},
				error => {
					console.warn(error);
					this.notService.openSnackBar('Une erreur de connexion avec le serveur est survenu.', 'serveur');
				}
			);
		}
		else
			this.notService.openSnackBar('Formulaire nom remplis', 'formulaire');
	}

	/**
	 * @method reset() - Reinitialise le formulaire
	 */
	reset() {
		this.mediaForm = new FormGroup({
			nom: new FormControl(this.mediaModif.name, [
				Validators.required
			]),
			type: new FormControl({ value: this.mediaModif.type, disabled: true }),
			description: new FormControl(this.mediaModif.description, [
				Validators.required
			]),
			url: new FormControl(this.mediaModif.img)
		});
	}

}
