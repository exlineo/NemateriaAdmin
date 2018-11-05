import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatNativeDateModule } from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Erreur404Component } from './erreur404/erreur404.component';
import { TraversingComponent } from './traversing/traversing.component';
import { MediaComponent } from './media/media.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    TraversingComponent,
    Erreur404Component,
    MediaComponent,
    SidenavComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
