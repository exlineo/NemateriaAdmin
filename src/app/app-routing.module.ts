import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TraversingComponent } from './traversing/traversing.component';
import { MediaComponent } from './media/media.component';
import { Erreur404Component } from './erreur404/erreur404.component';

const routes: Routes = [
  { path: '', component: TraversingComponent },
  { path: 'media', component: MediaComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: Erreur404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
