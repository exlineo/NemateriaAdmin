import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../systeme/services/collection.service';
import { ScanService } from '../../systeme/services/scan.service';

@Component({
	selector: 'app-interface',
	templateUrl: './interface.component.html',
	styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

	constructor(public colServ:CollectionService, public scanServ:ScanService) { }

	ngOnInit() {
		// console.log(this.scanServ.listeDossiers);
	}

}
