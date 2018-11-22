import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
		ReactiveFormsModule,
		InterfaceModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
