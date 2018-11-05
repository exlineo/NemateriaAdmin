import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Erreur404Component } from './erreur404/erreur404.component';
import { TraversingComponent } from './traversing/traversing.component';

@NgModule({
  declarations: [
    AppComponent,
    TraversingComponent,
    Erreur404Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
