import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media.service';
import { MediaModel } from '../modeles/media.modele';
import { NOTFOUND } from 'dns';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  providers: [ MediaService ],
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  media: MediaModel = { id: -1, name: 'NOTFOUND', directory: 'NOTFOUND', img: 'assets/img/default.jpg', description: 'NOTFOUND'};

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
    this.showMedia();
  }

  showMedia() {
    this.mediaService.getMedia()
      .subscribe((data: MediaModel) => this.media = {
        id: data['id'],
        name: data['name'],
        directory: data['directory'],
        img: data['img'],
        description: data['description']
      });
  }
}
