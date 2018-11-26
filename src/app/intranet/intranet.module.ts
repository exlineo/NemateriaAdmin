// Angular Library
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Extern Library
import { MaterialModule } from 'src/app/library/material-module';

// Rooting
import { IntranetRootingModule } from "./intranet-routing.module";

// Service
import { MediaService } from 'src/app/intranet/systeme/services/media.service';

// Component
import { HeaderComponent } from 'src/app/intranet/partage/header/header.component';
import { SidenavComponent } from 'src/app/intranet/partage/sidenav/sidenav.component';
import { InterfaceComponent } from 'src/app/intranet/partage/interface/interface.component';
import { OptionPopInComponent } from 'src/app/intranet/partage/option-pop-in/option-pop-in.component';
import { ListeMediaComponent } from "./media/liste-media/liste-media.component";
import { FicheMediaComponent } from "./media/fiche-media/fiche-media.component";
import { AjouterMediaComponent } from "./media/ajouter-media/ajouter-media.component";
import { ModifierMediaComponent } from './media/modifier-media/modifier-media.component';
import { FicheProfileComponent } from "./profile/fiche-profile/fiche-profile.component";


@NgModule({
	imports: [
		CommonModule,
		IntranetRootingModule,
		MaterialModule,
		ReactiveFormsModule
	],
	providers: [MediaService],
	declarations: [
		HeaderComponent,
		SidenavComponent,
		InterfaceComponent,
		OptionPopInComponent,
		ListeMediaComponent,
		FicheMediaComponent,
		AjouterMediaComponent,
		ModifierMediaComponent,
		FicheProfileComponent
	],
	entryComponents: [OptionPopInComponent]
})
export class IntranetModule { }
