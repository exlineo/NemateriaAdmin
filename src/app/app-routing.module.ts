import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthguardGuard } from 'src/app/systeme/services/authguard.guard';

import { ConnexionComponent } from './modules/connexion/connexion.component';
import { Erreur404Component } from './modules/erreur/erreur404.component';

const routes: Routes = [
	{ path: '', component: ConnexionComponent },
	{ path: 'connexion', component: ConnexionComponent },
	{ path: 'interface', loadChildren: "./modules/interface/interface.module#InterfaceModule", canLoad: [AuthguardGuard] },
	{ path: '**', component: Erreur404Component },
	{ path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
