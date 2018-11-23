import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MediaService } from "../../../systeme/services/media.service";
import { MediaModel } from "../../../systeme/modeles/media.modele";

@Component({
	selector: 'app-fiche-media',
	templateUrl: './fiche-media.component.html',
	styleUrls: ['./fiche-media.component.css']
})
export class FicheMediaComponent implements OnInit {

	mediaSelected: MediaModel;

	constructor(private route: ActivatedRoute, private location: Location, private mediaService: MediaService) { }

	ngOnInit() {
		this.mediaSelected = { id: -1, type: 'NOTFOUND', name: 'NOTFOUND', directory: 'NOTFOUND', img: 'assets/img/default.jpg', description: 'NOTFOUND' };
		this.getMediaSelected();
	}

	/**
	 * @method getIdSelected() - Recupere dans la root l'id du media selectionne
	 * @returns {number} id - l'id du media selectionne
	 */
	getIdSelected(): number {
		const id = +this.route.snapshot.paramMap.get('id');
		return id;
	}

	/**
	 * @method getMediaSelected() - Recupere les infos du media selectionne
	 */
	getMediaSelected(): void {
		/*
		this.mediaService.loadListe().subscribe(data => {
			this.mediaSelected = data.find(media => media.id === this.getIdSelected());
		})
		*/

		this.mediaSelected = this.mediaService.initMedias.find(media => media.id == this.getIdSelected());
	}

}
