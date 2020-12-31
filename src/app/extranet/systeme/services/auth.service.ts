// Angular Library
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

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

	constructor(private http: HttpClient, private router: Router, private notService: NotificationService, public tokenServ: TokenService) {
		if (eval(sessionStorage.getItem('auth'))) {
			this.auth = eval(sessionStorage.getItem('auth'));
		};
	}

	/**
	 * Authentifier un utilisateur
	 * @param u Objet d'identification
	 * @method authUser() - Authentifie un user en fct. d'un email et d'un mdp
	 */
	authUser(u): void {
		this.http.get(environment.SERV + 'comptes/' + u.id + '/' + u.pass).subscribe(
			retour => {
				console.log("Retour identification", retour);
				if (retour['status'] == '401' || !retour['compte']) {
					this.tokenServ.token = null;
					console.log("Echec de la connexion");
				} else {
					this.tokenServ.token = 'connecté';
					this.connexion(null);
					console.log("Connexion");
					this.router.navigateByUrl('/intranet');
					this.notService.openSnackBar('Bienvenue ' + u.email, 'connexion');
				}

			},
			erreur => {
				console.log(erreur);
			}
		)

	}
	/**
	 * Déconnecter l'utilisateur
	 */
	deconnexion() {
		this.auth = false;
		this.tokenServ.token = null;
		sessionStorage.setItem('auth', null);
	}
	/**
	 * Connecter un utilisateur
	 */
	connexion(token) {
		sessionStorage.setItem('auth', 'true');
		this.auth = true;
		console.log("Auth", this.auth);
		if (token) {
			this.tokenServ.token = token;
		}
	}
}
