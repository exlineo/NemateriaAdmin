// Angular Library
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

// Service
import { NotificationService } from "../../systeme/services/notification.service";

// Model
import { UserModel } from "src/app/extranet/systeme/modeles/user.modele";
import { TokenService } from './token.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	auth: boolean = false;
	userAuth: UserModel;

	constructor(private http: HttpClient, private router: Router, private notService: NotificationService, public securite:TokenService) {
		if(eval(sessionStorage.getItem('auth'))){
			this.auth = eval(sessionStorage.getItem('auth'));
		};
	}

	/**
	 * Authentifier un utilisateur
	 * @method authUser() - Authentifie un user en fct. d'un email et d'un mdp
	 * @returns {Observable}
	 */
	authUser(userObject): void {
		// this.securite.token = 'connecté';
		this.connexion(null);
		console.log("Connexion");
		this.router.navigateByUrl('/intranet');
		this.notService.openSnackBar('Bienvenue ' + userObject.email, 'connexion');
	}
	/**
	 * Déconnecter l'utilisateur
	 */
	deconnexion(){
		this.auth = false;
		this.securite.token = null;
		sessionStorage.setItem('auth', null);
	}
	/**
	 * Connecter un utilisateur
	 */
	connexion(token){
		sessionStorage.setItem('auth', 'true');
		this.auth = true;
		console.log("Auth", this.auth);
		if(token){
			this.securite.token = token;
		}
	}
}
