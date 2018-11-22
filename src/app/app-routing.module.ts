import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnexionComponent } from './modules/connexion/connexion.component';
import { InterfaceComponent } from "./modules/interface/interface.component";
import { ListeMediaComponent } from "./modules/liste-media/liste-media.component";
import { FicheMediaComponent } from "./modules/fiche-media/fiche-media.component";
import { AuthguardGuard } from './systeme/services/authguard.guard';

const routes: Routes = [
	{ path: '', component: ConnexionComponent },
	{ path: 'connexion', component: ConnexionComponent },
	{ path: 'home', component: InterfaceComponent, canActivate: [AuthguardGuard],
		children: [
			{ path: 'listeMedia', component: ListeMediaComponent },
			{ path: 'ficheMedia/:id', component: FicheMediaComponent },
		] },
	{ path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
