import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnexionComponent } from './modules/connexion/connexion.component';
import { Erreur404Component } from './modules/erreur/erreur404.component';
import { FoyerComponent } from "./modules/foyer/foyer.component";

const routes: Routes = [
  { path: '', component: ConnexionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'foyer', component: FoyerComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: Erreur404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
