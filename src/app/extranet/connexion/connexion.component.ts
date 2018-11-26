// Angular Library
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

// Service
import { AuthService } from "src/app/extranet/systeme/services/auth.service";
import { NotificationService } from "src/app/extranet/systeme/services/notification.service";

@Component({
	templateUrl: './connexion.component.html',
	styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

	/** 
	 * Instance du formulaire de connnexion 
	 */
	connexionForm = new FormGroup({
		email: new FormControl('', [
			Validators.required,
			Validators.email,
		]),
		pass: new FormControl('', [
			Validators.required,
			Validators.minLength(8)
		]),
	});

	constructor(private router: Router, public authService: AuthService, private notService: NotificationService) { }

	ngOnInit() { 

	}

	/**
	 * @method authentifier() - Envois une requête de connexion via authService
	 */
	authentifier(): void {
		if (this.connexionForm.valid) 
			this.authService.authUser(this.connexionForm.value);
	}

}
