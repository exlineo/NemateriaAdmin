// Angular Library
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AideComponent } from './aide/aide.component';


const routes: Routes = [
	{ path: '', component: AideComponent, children:[
		{ path: ':page', component: AideComponent}
	]}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AideRoutingModule { }
