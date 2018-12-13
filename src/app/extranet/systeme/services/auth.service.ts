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

	constructor(private http: HttpClient, private router: Router, private notService: NotificationService) { 
		this.test();
	}

	/**
	 * @method readUser() - Retourne un obs. d'un read de user
	 * @returns {Observable}
	 */
	readUser(userEmail: number): Observable<UserModel[]> {
		return this.http.get<UserModel[]>(this.dataStorage + 'users/' + userEmail);
	}

	/**
	 * @method readUser() - Retourne un obs. d'un read de user
	 * @returns {Observable}
	 */
	createUser(newUser: UserModel): Observable<UserModel[]> {
		return this.http.post<UserModel[]>(this.dataStorage + 'users/', newUser);
	}

	/**
	 * @method authUser() - Authentifie un user en fct. d'un email et d'un mdp
	 * @returns {Observable}
	 */
	authUser(userObject): void {
		/*
		this.readUser(userObject.email).subscribe(
			data => {
				if(data.length == 0) {
					this.notService.openSnackBar('Votre identifiant est invalide ou vous n\'êtes pas encore inscrit.', 'serveur');
				} else {
					let userData = data[0];
					if (userData.pass == userObject.pass) {
						this.auth = true;
						this.userAuth = userData;
						this.router.navigate(['intranet/medias']);
						this.notService.openSnackBar('Bienvenu ' + userData.nom, 'connexion');
					} else {
						this.notService.openSnackBar('Mot de passe ou identifiant invalide', 'connexion');
					}
				}
			},
			error => {
				this.notService.openSnackBar('Connexion au serveur impossible', 'connexion');
			}
		)
		*/
		this.auth = true;
		this.router.navigate(['intranet/notice']);
		this.notService.openSnackBar('Bienvenu ' + userObject.email, 'connexion');
	}

	addUser(newUser: UserModel) {
		
		newUser._id = -1;
		newUser.type = 'user';
		newUser.created = Date.now();
		newUser.updated = Date.now();

		console.log(newUser);
		this.createUser(newUser).subscribe(
			data => {
				this.notService.openSnackBar('Vous pouvez maintenant vous connecter', 'connexion');
			},
			error => {
				console.warn(error)
				this.notService.openSnackBar('Connexion au serveur impossible', 'connexion');
			}
		)
	}

	test() {
		
	}
}
