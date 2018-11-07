import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { ConnexionComponent } from './connexion/connexion.component';
import { TraversingComponent } from './traversing/traversing.component';
import { MediaComponent } from './media/media.component';
import { ProfileEditorComponent } from "./profile-editor/profile-editor.component";
import { Erreur404Component } from './erreur404/erreur404.component';

const routes: Routes = [
  { path: '', component: ConnexionComponent },
  { path: 'traversing', component: TraversingComponent, canActivate: [AuthGuard] },
  { path: 'media', component: MediaComponent, canActivate: [AuthGuard] },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'test', component: ProfileEditorComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: Erreur404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
