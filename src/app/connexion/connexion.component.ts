import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  donneesID = {
    login: '',
    mdp: ''
  };
  authErreur = false;
  connecte: boolean = false;

  constructor(private router: Router, public authService: AuthService) {
  }

  ngOnInit() {
  }
  
  // Authentifier à partir d'un http dans le service
  authentifier() {
    console.log('trigger authentifier()');
    this.authErreur = false;
    this.authService.authentifier(this.donneesID)
      .subscribe(
        () => this.router.navigate(['media']),
        () => this.authErreur = true
      );
  }

}
