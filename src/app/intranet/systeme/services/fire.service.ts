import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FireService {

  fireApp:any;
  anal:any;

  constructor() {
    // Initialisation de firebase
    this.fireApp = initializeApp(environment.FIRECONF);
    this.anal = getAnalytics(this.fireApp);
  }
}
