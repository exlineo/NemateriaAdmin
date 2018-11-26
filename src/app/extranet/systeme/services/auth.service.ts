// Angular Library
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

// Service
import { NotificationService } from "../../systeme/services/notification.service";

// Model
import { UserModel } from "src/app/extranet/systeme/modeles/user.modele";

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	auth: boolean = false;
	userAuth: UserModel;
	dataStorage: string = 'http://localhost:8080/api/';

	constructor(private http: HttpClient, private router: Router, private notService: NotificationService) { }

	/**
	 * @method readUser() - Retourne un obs. d'un read de user
	 * @returns {Observable}
	 */
	readUser(userEmail: number): Observable<UserModel[]> {
		return this.http.get<UserModel[]>(this.dataStorage + 'users/' + userEmail);
	}

	/**
	 * @method authUser() - Authentifie un user en fct. d'un email et d'un mdp
	 * @returns {Observable}
	 */
	authUser(userObject): void {
		this.readUser(userObject.email).subscribe(
			data => {
				let userData = data[0];
				if (userData.pass == userObject.pass) {
					this.auth = true;
					this.userAuth = userData;
					this.router.navigate(['medias']);
				} else {
					this.notService.openSnackBar('Mot de passe ou identifiant invalide', 'connexion');
				}
			},
			error => {
				this.notService.openSnackBar('Connexion au serveur impossible', 'connexion');
			}
		)
	}
}
