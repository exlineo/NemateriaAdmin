import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../systeme/services/collection.service';

@Component({
	selector: 'app-interface',
	templateUrl: './interface.component.html',
	styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

	constructor(public colServ:CollectionService) { }

	ngOnInit() {
		
	}

}
