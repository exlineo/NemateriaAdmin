import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterfaceRootingModule } from "../interface/interface-routing.module";
import { Erreur404Component } from '../erreur/erreur404.component';
import { OptionPopInComponent } from '../option-pop-in/option-pop-in.component';
import { FicheMediaComponent } from '../fiche-media/fiche-media.component';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		InterfaceRootingModule
	],
	declarations: [
		Erreur404Component,
		OptionPopInComponent,
		FicheMediaComponent,],
	entryComponents: [OptionPopInComponent]
})
export class InterfaceModule { }
