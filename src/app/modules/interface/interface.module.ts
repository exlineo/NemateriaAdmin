import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfaceRootingModule } from "../interface/interface-routing.module";
import { MaterialModule } from '../../material-module';
import { MediaService } from 'src/app/systeme/services/media.service';

import { InterfaceComponent } from './interface.component';
import { ListeMediaComponent } from './liste-media/liste-media.component';
import { FicheMediaComponent } from './fiche-media/fiche-media.component';
import { OptionPopInComponent } from './option-pop-in/option-pop-in.component';

@NgModule({
	imports: [
		CommonModule,
		InterfaceRootingModule,
		MaterialModule
	],
	providers: [MediaService],
	declarations: [
		InterfaceComponent,
		ListeMediaComponent,
		FicheMediaComponent,
		OptionPopInComponent],
	entryComponents: [OptionPopInComponent]
})
export class InterfaceModule { }
