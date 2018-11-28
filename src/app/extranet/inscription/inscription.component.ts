// Angular Library
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

// Service
import { AuthService } from "src/app/extranet/systeme/services/auth.service";
import { NotificationService } from "src/app/extranet/systeme/services/notification.service";
import { MatDialogRef } from '@angular/material';

@Component({
	selector: 'app-inscription',
	templateUrl: './inscription.component.html',
	styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
	userForm = new FormGroup({
		nom: new FormControl('', [
			Validators.required,
			Validators.email,
		]),
		email: new FormControl('', [
			Validators.required,
			Validators.email,
		]),
		pass: new FormControl('', [
			Validators.required,
			Validators.minLength(8)
		]),
	});

	constructor(
		private notService: NotificationService,
		public authService: AuthService,
		public dialogRef: MatDialogRef<InscriptionComponent>
	) { }

	ngOnInit() {
	}

	onNoClick(): void {
		this.dialogRef.close();
	}

	/**
	 * @method save() - Envois une requête de connexion via authService
	 */
	save(): void {
		if (this.userForm.valid) {
			this.authService.addUser(this.userForm.value);
			//this.dialogRef.close();
		} else {
			this.notService.openSnackBar('formulaire non valide', 'inscription');
		}
			
	}

	/**
	 * @method reset() - Reinitialyse le formulaire
	 */
	reset(): void {
		this.userForm = new FormGroup({
			nom: new FormControl('', [
				Validators.required
			]),
			email: new FormControl('', [
				Validators.required,
				Validators.email,
			]),
			pass: new FormControl('', [
				Validators.required,
				Validators.minLength(8)
			]),
		});
	}

}
