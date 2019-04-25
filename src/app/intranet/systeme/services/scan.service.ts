import { Injectable } from '@angular/core';

import { SERV } from '../config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScanService {

  scans;

  constructor(private http:HttpClient) { }

  /**
	 * Récupérer l'ensemble des collections disponibles dans le depôt
	 */
	getMetaFiles(dir:string, f:string): void {
		// return this.http.get<Array<CollectionModel>>(this.dataStorage + 'collections.json');
		this.http.get(SERV+'scans/'+dir, {params:{'f':f}}).subscribe(
			data => {
				console.log(data);
				this.scans = data;
			}
		)
  }

  getDir(): void {
		// return this.http.get<Array<CollectionModel>>(this.dataStorage + 'collections.json');
		this.http.get(SERV+'scans/courtav/').subscribe(
			data => {
				console.log(data);
				this.scans = data;
			}
		)
  }
  
}
