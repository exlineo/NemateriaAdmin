// Angular Library
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

// Service
import { AuthService } from "src/app/extranet/systeme/services/auth.service";
import { NotificationService } from "src/app/extranet/systeme/services/notification.service";
import { MatDialog } from '@angular/material';

import { InscriptionComponent } from "src/app/extranet/inscription/inscription.component";

@Component({
	templateUrl: './connexion.component.html',
	styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

	/** 
	 * Instance du formulaire de connnexion 
	 */
	connexionForm = new FormGroup({
		email: new FormControl('itsadeki@gmail.com', [
			Validators.required,
			Validators.email,
		]),
		pass: new FormControl('itsadeki', [
			Validators.required,
			Validators.minLength(8)
		]),
	});

	constructor(
		private router: Router, 
		public authService: AuthService, 
		private notService: NotificationService,
		public dialog: MatDialog
	) { }

	ngOnInit() { 

	}

	/**
	 * @method authentifier() - Envois une requête de connexion via authService
	 */
	authentifier(): void {
		if (this.connexionForm.valid) 
			this.authService.authUser(this.connexionForm.value);
	}

	/**
	 * @method openDialog() - ouvre une pop in d'inscription
	 * @param event l'event du lien à prevent
	 */
	openDialog(event): void {
		event.preventDefault();
		const dialogRef = this.dialog.open(InscriptionComponent, {
			width: '550px',
			data: { }
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
		});
	}
}