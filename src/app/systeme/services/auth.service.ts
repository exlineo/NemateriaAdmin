import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from "./user.service";
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	auth = false;

	constructor(private http: HttpClient, private userService: UserService, private router: Router ) { }

	/**
	 * @method Envois une requette de connexion et retourne un boolean
	 * @param userObject objet contenant de infos de connexion
	 * @return Boolean
	 */
	submit(userObject): void {
		console.log('test');
		this.userService.loadListe().subscribe(
			data => {
				
				let user = data.find(user => user.email = userObject.email);
				
				if (user.pass == userObject.pass) {
					this.auth = true;
					this.router.navigate(['home']);
				}

				else {
					console.error('Mot de passe ou identifiant invalide');
				}
			},
			error => {
				console.error('Connexion au serveur impossible');
			}
		)
	}
}
