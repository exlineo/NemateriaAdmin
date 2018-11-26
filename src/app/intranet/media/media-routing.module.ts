import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthguardGuard } from 'src/app/intranet/systeme/services/authguard.guard';

import { InterfaceComponent } from "../partage/interface/interface.component";

import { ListeMediaComponent } from "./liste-media/liste-media.component";
import { FicheMediaComponent } from "./fiche-media/fiche-media.component";
import { AjouterMediaComponent } from "./ajouter-media/ajouter-media.component";
import { ModifierMediaComponent } from './modifier-media/modifier-media.component';

const routes: Routes = [
	{
		path: '', component: InterfaceComponent,
		children: [
			{ path: '', component: ListeMediaComponent, canLoad: [AuthguardGuard] },
			{ path: 'afficher/:id', component: FicheMediaComponent, canLoad: [AuthguardGuard] },
			{ path: 'modifier/:id', component: ModifierMediaComponent, canLoad: [AuthguardGuard] },
			{ path: 'ajouter', component: AjouterMediaComponent, canLoad: [AuthguardGuard] }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MediaRootingModule { }
