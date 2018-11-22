import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeMediaComponent } from "./liste-media/liste-media.component";
import { FicheMediaComponent } from "./fiche-media/fiche-media.component";
import { InterfaceComponent } from './interface.component';
import { AuthguardGuard } from 'src/app/systeme/services/authguard.guard';

const routes: Routes = [
	{ path: '', component: InterfaceComponent,
	children:[
		{ path: 'medias', component: ListeMediaComponent, canLoad: [AuthguardGuard] },
		{ path: 'media/:id', component: FicheMediaComponent, canLoad: [AuthguardGuard] }
	]}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InterfaceRootingModule { }
