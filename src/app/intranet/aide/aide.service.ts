import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from '../systeme/library/utils.service';

@Injectable({
  providedIn: 'root'
})
export class AideService {

  aide;

  constructor(private http:HttpClient, public utils:UtilsService) {
    this.getAide();
  }

  getAide(){
    this.http.get('/assets/aide/'+this.utils.params.langue+'/help.json').subscribe(
      aide => this.aide = aide
    );
  }
}
