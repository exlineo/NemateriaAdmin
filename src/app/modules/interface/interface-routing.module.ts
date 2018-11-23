import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthguardGuard } from 'src/app/systeme/services/authguard.guard';

import { InterfaceComponent } from './interface.component';
import { ListeMediaComponent } from "./liste-media/liste-media.component";
import { FicheMediaComponent } from "./fiche-media/fiche-media.component";
import { NouveauMediaComponent } from './nouveau-media/nouveau-media.component';
import { ModifierMediaComponent } from './modifier-media/modifier-media.component';

const routes: Routes = [
	{ path: '', component: InterfaceComponent,
	children:[
		{ path: 'medias', component: ListeMediaComponent, canLoad: [AuthguardGuard] },
		{ path: 'media/:id', component: FicheMediaComponent, canLoad: [AuthguardGuard] },
		{ path: 'modification/:id', component: ModifierMediaComponent, canLoad: [AuthguardGuard] },
		{ path: 'nouveau-media', component: NouveauMediaComponent, canLoad: [AuthguardGuard] }
	]}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InterfaceRootingModule { }
