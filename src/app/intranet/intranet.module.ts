// Angular Library
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Extern Library
import { MaterialModule } from 'src/app/library/material-module';

// Rooting
import { IntranetRoutingModule } from "./intranet-routing.module";

// Service
//import { MediaService } from 'src/app/intranet/systeme/services/media.service';
import { NoticeService } from 'src/app/intranet/systeme/services/notice.service';

// Component
import { HeaderComponent } from 'src/app/intranet/partage/header/header.component';
import { SidenavComponent } from 'src/app/intranet/partage/sidenav/sidenav.component';
import { InterfaceComponent } from 'src/app/intranet/partage/interface/interface.component';
import { OptionPopInComponent } from 'src/app/intranet/partage/option-pop-in/option-pop-in.component';

import { NoticeComponent } from './notice/notice.component';
import { CollectionComponent } from './collection/collection.component';
import { ScannerComponent } from './scanner/scanner.component';
import { FiltreComponent } from './filtre/filtre.component';
import { NoticesComponent } from './notices/notices.component';
import { CollectionsComponent } from './collections/collections.component';
import { FiltresComponent } from './filtres/filtres.component';
import { MappagesComponent } from './mappages/mappages.component';
import { MappageComponent } from './mappage/mappage.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CollectionService } from './systeme/services/collection.service';

import { FiltrePipe } from './systeme/pipes/filtre.pipe';
import { UtilsService } from './systeme/library/utils.service';
import { FiltreNoticesPipe } from './systeme/pipes/filtre-notices.pipe';
import { ParametresComponent } from './partage/parametres/parametres.component';
import { ClesJsonPipe } from './systeme/pipes/clesJson.pipe';
import { FiltresService } from './systeme/services/filtres.service';
import { MappagesService } from './systeme/services/mappages.service';
import { NotificationService } from '../extranet/systeme/services/notification.service';
import { ScanService } from './systeme/services/scan.service';
import { SetsComponent } from './sets/sets.component';
import { SetComponent } from './set/set.component';
import { ObjPipe } from './systeme/pipes/obj.pipe';

@NgModule({
	imports: [
		CommonModule,
		IntranetRoutingModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [NoticeService, CollectionService, UtilsService, FiltresService, MappagesService, NotificationService, ScanService],
	declarations: [
		HeaderComponent,
		SidenavComponent,
		InterfaceComponent,
		OptionPopInComponent,
		NoticeComponent,
		CollectionComponent,
		ScannerComponent,
		FiltreComponent,
		NoticesComponent,
		CollectionsComponent,
		FiltresComponent,
		MappagesComponent,
		MappageComponent,
		AccueilComponent,
		FiltrePipe,
		FiltreNoticesPipe,
		ParametresComponent,
		ClesJsonPipe,
		SetsComponent,
		SetComponent,
		ObjPipe
	],
	entryComponents: [OptionPopInComponent]
})
export class IntranetModule { }
