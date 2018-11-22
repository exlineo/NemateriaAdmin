import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatNativeDateModule } from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConnexionComponent } from './modules/connexion/connexion.component';
import { InterfaceModule } from './modules/interface/interface.module';
import { InterfaceComponent } from './modules/interface/interface.component';
import { ListeMediaComponent } from './modules/liste-media/liste-media.component';


@NgModule({
	declarations: [
		AppComponent,
		ConnexionComponent,
		InterfaceComponent,
		ListeMediaComponent
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
