import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from "./user.service";
import { Router } from '@angular/router';
import { NotificationService } from "../../systeme/services/notification.service";

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	auth = false;

	constructor(private http: HttpClient, private userService: UserService, private router: Router, private notService: NotificationService) { }

	/**
	 * @method submit() - Envois une requette de connexion et retourne un boolean
	 * @param {Object} userObject - objet contenant de infos de connexion
	 */
	submit(userObject): void {
		this.userService.loadListe().subscribe(
			data => {
				
				let user = data.find(user => user.email = userObject.email);

				if (user.pass == userObject.pass) {
					this.auth = true;
					this.router.navigate(['interface/medias']);
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
