import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { AuthService } from "../../systeme/services/auth.service";

@Component({
	templateUrl: './connexion.component.html',
	styleUrls: ['./connexion.component.css'],
	providers: [AuthService]
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

	constructor(private router: Router, private authService: AuthService) { }

	ngOnInit() { 

	}

	/**
	 * @method Route ou renvoi une erreur
	 */
	authentifier() {

		if (this.connexionForm.valid) {
			this.authService.submit(this.connexionForm.value)
		}
					
	}

}
