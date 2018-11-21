import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

@Component({
	templateUrl: './connexion.component.html',
	styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

	/** Intance du formulaire de connnexion */
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

	constructor(private router: Router) { }

	ngOnInit() {
	}

	/**
	 * @method Route ou renvoi une erreur
	 */
	authentifier() {

		if (this.connexionForm.valid) {
			if (this.submit(this.connexionForm.value)) 
				this.router.navigate(['media']); 
			else
				alert('email ou mot de passe incorrect');
		}
					
	}

	/**
	 * @method Envois une requette de connexion et retourne un boolean
	 * @param userObject objet contenant de infos de connexion
	 * @return Boolean
	 */
	submit(userObject) {
		var auth = false; 
		
		const req = {
			login: userObject.email,
			mdp: 'tttttttt'
		};

		if (userObject.pass == req.mdp)
			auth = true;

		return auth;
	}

}
