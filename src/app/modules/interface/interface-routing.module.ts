import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeMediaComponent } from "../liste-media/liste-media.component";
import { FicheMediaComponent } from "../fiche-media/fiche-media.component";
import { Erreur404Component } from '../erreur/erreur404.component';

const routes: Routes = [
	{ path: 'listeMedia', component: ListeMediaComponent },
	{ path: 'ficheMedia/:id', component: FicheMediaComponent },
	{ path: '**', component: Erreur404Component }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InterfaceRootingModule { }
