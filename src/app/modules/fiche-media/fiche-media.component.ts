import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { MediaService } from "../../systeme/services/media.service";
import { MediaModel } from "../../systeme/modeles/media.modele";

@Component({
	selector: 'app-fiche-media',
	templateUrl: './fiche-media.component.html',
	styleUrls: ['./fiche-media.component.css'],
	providers: [MediaService]
})
export class FicheMediaComponent implements OnInit {

	mediaSelected: MediaModel = { id: -1, type: 'NOTFOUND', name: 'NOTFOUND', directory: 'NOTFOUND', img: 'assets/img/default.jpg', description: 'NOTFOUND' };
	donnees$: Subscription;

	constructor(private route: ActivatedRoute, private location: Location, private mediaService: MediaService) { }

	ngOnInit() {
		this.getMediaSelected();
	}

	getMediaSelected(): void {
		// recuperer l'id du media dans la root
		const id = +this.route.snapshot.paramMap.get('id');

		// recuperer le media en fct de son id
		this.donnees$ = this.mediaService.mediaListe$.subscribe(
			data => {
				this.mediaSelected = data.find(media => media.id === id);
			}
		);
		
	}

}
