import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeMediaComponent } from "./liste-media/liste-media.component";
import { FicheMediaComponent } from "./fiche-media/fiche-media.component";
import { InterfaceComponent } from './interface.component';

const routes: Routes = [
	{ path: '', component: InterfaceComponent,
	children:[
		{ path: 'medias', component: ListeMediaComponent },
		{ path: 'media/:id', component: FicheMediaComponent }
	]}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InterfaceRootingModule { }
