import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InterfaceRootingModule } from "../interface/interface-routing.module";

import { MaterialModule } from '../../material-module';

import { MediaService } from 'src/app/systeme/services/media.service';

import { InterfaceComponent } from './interface.component';
import { ListeMediaComponent } from './liste-media/liste-media.component';
import { FicheMediaComponent } from './fiche-media/fiche-media.component';
import { OptionPopInComponent } from './option-pop-in/option-pop-in.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NouveauMediaComponent } from './nouveau-media/nouveau-media.component';

@NgModule({
	imports: [
		CommonModule,
		InterfaceRootingModule,
		MaterialModule,
		ReactiveFormsModule
	],
	providers: [MediaService],
	declarations: [
		InterfaceComponent,
		ListeMediaComponent,
		FicheMediaComponent,
		OptionPopInComponent,
		HeaderComponent,
		SidenavComponent,
		NouveauMediaComponent],
	entryComponents: [OptionPopInComponent]
})
export class InterfaceModule { }
