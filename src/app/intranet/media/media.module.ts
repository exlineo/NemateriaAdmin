// Angular Library
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Extern Library
import { MaterialModule } from 'src/app/library/material-module';

// Rooting
import { MediaRootingModule } from "./media-routing.module";

// UI Component
import { OptionPopInComponent } from '../partage/option-pop-in/option-pop-in.component';
import { HeaderComponent } from '../partage/header/header.component';
import { SidenavComponent } from '../partage/sidenav/sidenav.component';

// Page Component
import { InterfaceComponent } from '../partage/interface/interface.component';
import { ListeMediaComponent } from './liste-media/liste-media.component';
import { FicheMediaComponent } from './fiche-media/fiche-media.component';
import { AjouterMediaComponent } from './ajouter-media/ajouter-media.component';
import { ModifierMediaComponent } from './modifier-media/modifier-media.component';

// Service
import { MediaService } from 'src/app/intranet/systeme/services/media.service';

@NgModule({
	imports: [
		CommonModule,
		MediaRootingModule,
		MaterialModule,
		ReactiveFormsModule
	],
	providers: [MediaService],
	declarations: [
		HeaderComponent,
		SidenavComponent,
		OptionPopInComponent,
		InterfaceComponent,
		ListeMediaComponent,
		FicheMediaComponent,
		AjouterMediaComponent,
		ModifierMediaComponent,
		AjouterMediaComponent],
	entryComponents: [OptionPopInComponent]
})
export class MediaModule { }
