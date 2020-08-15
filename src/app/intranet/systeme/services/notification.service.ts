import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
	providedIn: 'root'
})
export class NotificationService {

	constructor(public snackBar: MatSnackBar) { }

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
		duration: 2000,
		});
	}

	notif(message: string, action: string="Notification") {
		this.snackBar.open(message, action, {
			duration: 2000,
		});
	}
}
