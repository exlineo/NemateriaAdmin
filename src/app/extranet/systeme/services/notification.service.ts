import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationModele } from '../modeles/notification.modele';

@Injectable({
	providedIn: 'root'
})
export class NotificationService {

	notifications:Array<NotificationModele>;

	constructor(public snackBar: MatSnackBar) {
		this.notifications = [
			{
				titre:'Némateria on the road',
				soustitre:'Le projet avance',
				description:'Le travaux sont en cours sur plusieurs dimensions : administration des données, traitements des métadonnées avec Bridge, serveur de distribution...',
				lien:'http://github.com/exlineo'
			}
		]
	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
		duration: 2000,
		});
	}
}
