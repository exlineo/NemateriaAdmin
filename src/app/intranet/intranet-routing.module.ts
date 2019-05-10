// Angular Library
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Page Component
import { InterfaceComponent } from './partage/interface/interface.component';

import { NoticeComponent } from './notice/notice.component';
import { CollectionComponent } from './collection/collection.component';
import { ScannerComponent } from './scanner/scanner.component';
import { FiltreComponent } from './filtre/filtre.component';

import { ListeMediaComponent } from "./media/liste-media/liste-media.component";
import { FicheMediaComponent } from "./media/fiche-media/fiche-media.component";
import { AjouterMediaComponent } from "./media/ajouter-media/ajouter-media.component";
import { ModifierMediaComponent } from './media/modifier-media/modifier-media.component';

import { FicheProfileComponent } from "./profile/fiche-profile/fiche-profile.component";
import { NoticesComponent } from './notices/notices.component';
import { CollectionsComponent } from './collections/collections.component';
import { FiltresComponent } from './filtres/filtres.component';
import { MappagesComponent } from './mappages/mappages.component';
import { MappageComponent } from './mappage/mappage.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
	{
		path: '', component: InterfaceComponent, children: [
			{ path: '', component:AccueilComponent },
			{ path: 'notices', component:NoticesComponent },
			{ path: 'notice/:id', component:NoticeComponent},
			{ path: 'collections', component: CollectionsComponent },
			{ path: 'scanner', component: ScannerComponent },
			{ path: 'mappages', component: MappagesComponent },
			{ path: 'mappage/:id', component: MappageComponent },
			{ path: 'filtres', component:FiltresComponent },
			{ path: 'filtre/:id', component:FiltresComponent }
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class IntranetRootingModule { }
