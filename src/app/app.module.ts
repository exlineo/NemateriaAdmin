import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthService } from "./systeme/services/auth.service";
import { NotificationService } from "./systeme/services/notification.service";
import { IntercepteurService } from "./systeme/services/intercepteur.service";

import { ConnexionComponent } from './modules/connexion/connexion.component';
import { InterfaceModule } from './modules/interface/interface.module';
import { Erreur404Component } from './modules/erreur/erreur404.component';

@NgModule({
	declarations: [
		AppComponent,
		ConnexionComponent,
		Erreur404Component
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [AuthService, NotificationService, { provide: HTTP_INTERCEPTORS, useClass: IntercepteurService, multi: true }],
	bootstrap: [AppComponent]
})
export class AppModule { }
