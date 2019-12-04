import { Injectable } from '@angular/core';
import { Iaccount } from './Iaccount';
import { Observable } from 'rxjs';
import {_throw} from 'rxjs/observable/throw';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BaseurlService } from '../baseurl.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AccountService {
    constructor(private httpClient: HttpClient,
                private baseurl : BaseurlService,
                private cookieService: CookieService) { }

    baseUrl = this.baseurl.getBaseUrl();

    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error: ', errorResponse.error.message);
        } else {
            console.error('Server Side Error: ', errorResponse);
        }

        return _throw('There is a problem with the service.');
    }

    getState(data : Iaccount): Observable<Iaccount> {
    	let httpOptions = {
          headers: new HttpHeaders({
            Authorization: 'Bearer '+this.cookieService.get('token')
          })
        };
        return this.httpClient.post<Iaccount>(this.baseUrl+'getstate', data, httpOptions)
        .pipe(catchError(this.handleError));
    }

    getCity(state : Iaccount): Observable<Iaccount> {
    	let httpOptions = {
          headers: new HttpHeaders({
            Authorization: 'Bearer '+this.cookieService.get('token')
          })
        };
        return this.httpClient.post<Iaccount>(this.baseUrl+'getcity', state, httpOptions)
        .pipe(catchError(this.handleError));
    }

    getFuelType(data : Iaccount): Observable<Iaccount> {
    	let httpOptions = {
          headers: new HttpHeaders({
            Authorization: 'Bearer '+this.cookieService.get('token')
          })
        };
        return this.httpClient.post<Iaccount>(this.baseUrl+'getfueltype', data, httpOptions)
        .pipe(catchError(this.handleError));
    }

    getVehicleType(data : Iaccount): Observable<Iaccount> {
    	let httpOptions = {
          headers: new HttpHeaders({
            Authorization: 'Bearer '+this.cookieService.get('token')
          })
        };
        return this.httpClient.post<Iaccount>(this.baseUrl+'getvehicletype', data, httpOptions)
        .pipe(catchError(this.handleError));
    }

    getMake(data : Iaccount): Observable<Iaccount> {
    	let httpOptions = {
          headers: new HttpHeaders({
            Authorization: 'Bearer '+this.cookieService.get('token')
          })
        };
        return this.httpClient.post<Iaccount>(this.baseUrl+'getmake', data, httpOptions)
        .pipe(catchError(this.handleError));
    }

    getModal(modal : Iaccount): Observable<Iaccount> {
    	let httpOptions = {
          headers: new HttpHeaders({
            Authorization: 'Bearer '+this.cookieService.get('token')
          })
        };
        return this.httpClient.post<Iaccount>(this.baseUrl+'getmodal', modal, httpOptions)
        .pipe(catchError(this.handleError));
    }

    addCar(cardetails : Iaccount): Observable<Iaccount> {
        let httpOptions = {
          headers: new HttpHeaders({
            Authorization: 'Bearer '+this.cookieService.get('token')
          })
        };
        return this.httpClient.post<Iaccount>(this.baseUrl+'addCar', cardetails, httpOptions)
        .pipe(catchError(this.handleError));
    }
}
