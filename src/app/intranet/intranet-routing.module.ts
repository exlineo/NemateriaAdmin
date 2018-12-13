// Angular Library
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Auth Guarg
import { AuthguardGuard } from 'src/app/extranet/systeme/services/authguard.guard';

// Page Component
import { InterfaceComponent } from 'src/app/intranet/partage/interface/interface.component';

import { NoticeComponent } from './notice/notice.component';
import { CollectionComponent } from './collection/collection.component';
import { ScannerComponent } from './scanner/scanner.component';
import { FiltreComponent } from './filtre/filtre.component';

import { ListeMediaComponent } from "./media/liste-media/liste-media.component";
import { FicheMediaComponent } from "./media/fiche-media/fiche-media.component";
import { AjouterMediaComponent } from "./media/ajouter-media/ajouter-media.component";
import { ModifierMediaComponent } from './media/modifier-media/modifier-media.component';

import { FicheProfileComponent } from "./profile/fiche-profile/fiche-profile.component";

const routes: Routes = [
	{
		path: '', component: InterfaceComponent, children: [
			{
				path: 'notice', component: NoticeComponent
			},
			{
				path: 'collection', component: CollectionComponent
			},
			{
				path: 'scanner', component: ScannerComponent
			},
			{
				path: 'filtre', component: FiltreComponent
			}
			/*
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
			*/
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class IntranetRootingModule { }
