// Angular Library
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Auth Guarg
import { AuthguardGuard } from 'src/app/extranet/systeme/services/authguard.guard';

// Page Component
import { InterfaceComponent } from 'src/app/intranet/partage/interface/interface.component';

import { ListeMediaComponent } from "./media/liste-media/liste-media.component";
import { FicheMediaComponent } from "./media/fiche-media/fiche-media.component";
import { AjouterMediaComponent } from "./media/ajouter-media/ajouter-media.component";
import { ModifierMediaComponent } from './media/modifier-media/modifier-media.component';

import { FicheProfileComponent } from "./profile/fiche-profile/fiche-profile.component";

const routes: Routes = [
	{
		path: '', component: InterfaceComponent, children: [
			{
				path: 'medias', component: ListeMediaComponent, canLoad: [AuthguardGuard]
			},
			{ 
				path: 'medias/afficher/:id', component: FicheMediaComponent, canLoad: [AuthguardGuard] 
			},
			{ 
				path: 'medias/modifier/:id', component: ModifierMediaComponent, canLoad: [AuthguardGuard] 
			},
			{ 
				path: 'medias/ajouter', component: AjouterMediaComponent, canLoad: [AuthguardGuard] 
			},
			{ 
				path: 'profile', component: FicheProfileComponent, canLoad: [AuthguardGuard] 
			},
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class IntranetRootingModule { }
