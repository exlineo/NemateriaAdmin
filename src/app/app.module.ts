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

import { Erreur404Component } from './modules/erreur/erreur404.component';
import { ConnexionComponent } from './modules/connexion/connexion.component';
import { FoyerComponent } from './modules/foyer/foyer.component';
import { OptionPopInComponent } from './modules/option-pop-in/option-pop-in.component';
import { FicheMediaComponent } from './modules/fiche-media/fiche-media.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    Erreur404Component,
    FoyerComponent,
    OptionPopInComponent,
    FicheMediaComponent,

  ],
  entryComponents: [OptionPopInComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
