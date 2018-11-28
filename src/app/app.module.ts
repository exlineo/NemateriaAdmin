// Angular Library
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Extern Library
import { MaterialModule } from './library/material-module';

// Rooting
import { AppRoutingModule } from './app-routing.module';

// Component
import { AppComponent } from './app.component';
import { ConnexionComponent } from './extranet/connexion/connexion.component';
import { Erreur404Component } from './extranet/erreur/erreur404.component';

// Service
import { AuthService } from "./extranet/systeme/services/auth.service";
import { NotificationService } from "./extranet/systeme/services/notification.service";
import { IntercepteurService } from "./extranet/systeme/services/intercepteur.service";
import { InscriptionComponent } from './extranet/inscription/inscription.component';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [
		AppComponent,
		ConnexionComponent,
		Erreur404Component,
		InscriptionComponent
	],
	providers: [AuthService, NotificationService, { provide: HTTP_INTERCEPTORS, useClass: IntercepteurService, multi: true }],
	bootstrap: [AppComponent]
})
export class AppModule { }
