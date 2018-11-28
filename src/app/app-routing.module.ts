// Angular Library
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Authentication Guard
import { AuthguardGuard } from 'src/app/extranet/systeme/services/authguard.guard';

// Component
import { ConnexionComponent } from './extranet/connexion/connexion.component';
import { Erreur404Component } from './extranet/erreur/erreur404.component';
import { InscriptionComponent } from './extranet/inscription/inscription.component';

// Rooting
const routes: Routes = [
	{ path: '', component: ConnexionComponent },
	{ path: 'connexion', component: ConnexionComponent },
	{ path: 'inscription', component: InscriptionComponent },
	{ path: 'intranet', loadChildren: "./intranet/intranet.module#IntranetModule", canLoad: [AuthguardGuard] },
	{ path: '**', component: Erreur404Component },
	{ path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
