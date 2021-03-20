import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  token:string;
  statut:string | number = 0;
  
  constructor() { }
}
