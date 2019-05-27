// Angular Library
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Page Component
import { InterfaceComponent } from './partage/interface/interface.component';

import { NoticeComponent } from './notice/notice.component';
import { ScannerComponent } from './scanner/scanner.component';

import { NoticesComponent } from './notices/notices.component';
import { CollectionsComponent } from './collections/collections.component';
import { FiltresComponent } from './filtres/filtres.component';
import { MappagesComponent } from './mappages/mappages.component';
import { MappageComponent } from './mappage/mappage.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ParametresComponent } from './partage/parametres/parametres.component';

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
			{ path: 'filtre/:id', component:FiltresComponent },
			{ path: 'parametres', component:ParametresComponent},
			{ path: 'aide', loadChildren: () => import('./aide/aide.module').then(m => m.AideModule)},

		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class IntranetRoutingModule { }
