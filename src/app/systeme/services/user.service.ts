import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from "../modeles/user.modele";

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(private http: HttpClient) { } 
	
	/**
	 * @method UserService - Retourne un obs. d'une req. de la liste des users
	 * @returns {Observable} - Obs d'une req. de la liste des users
	 */
	loadListe(): Observable<UserModel[]> {
		return this.http.get<UserModel[]>('assets/localStorage/user.json');
	}
}
