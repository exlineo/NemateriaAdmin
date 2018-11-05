import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MediaModel } from '../modeles/media.modele';

@Injectable()
export class MediaService {

    mediaDatas = 'assets/datas/media.json';

    constructor(private http: HttpClient) { }

    getMedia() {
        return this.http.get<MediaModel>(this.mediaDatas);
    }
}