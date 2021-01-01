import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, pipe } from 'rxjs';
import { catchError } from "rxjs/operators";
import { AuthService } from './auth.service';

@Injectable()
export class SecuriteIntercepteur implements HttpInterceptor {
  
  constructor(public auth:AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
    .pipe(
        catchError((erreur) => {
          if (erreur instanceof HttpErrorResponse && erreur.status == 401) {
            this.auth.deconnexion();
            console.log("Une erreur s'est produite");
            console.log(erreur); // Récupérer les erreurs et les affichers
          }
          return throwError(erreur)
          // return Observable.throw(erreur); // Retourner l'erreur dans tous les cas
      })) as any;
    }
}