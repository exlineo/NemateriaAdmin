// Angular Library
import { Component, OnInit } from '@angular/core';

// Service
import { AuthService } from "src/app/extranet/systeme/services/auth.service";

// Model

@Component({
	selector: 'app-fiche-profile',
	templateUrl: './fiche-profile.component.html',
	styleUrls: ['./fiche-profile.component.css']
})
export class FicheProfileComponent implements OnInit {

	constructor(public authService: AuthService) { }

	ngOnInit() {
		console.log(this.authService.userAuth);
	}

}
