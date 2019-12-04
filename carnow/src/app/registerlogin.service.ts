import { Injectable } from '@angular/core';
import { Iregisterlogin } from './Iregisterlogin';
import { Observable } from 'rxjs';
import {_throw} from 'rxjs/observable/throw';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BaseurlService } from './baseurl.service';

@Injectable()
export class RegisterloginService {
    constructor(private httpClient: HttpClient,
                private baseurl : BaseurlService) { }

    baseUrl = this.baseurl.getBaseUrl();

    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error: ', errorResponse.error.message);
        } else {
            console.error('Server Side Error: ', errorResponse);
        }

        return _throw('There is a problem with the service.');
    }

    addUser(user: Iregisterlogin): Observable<Iregisterlogin> {
        return this.httpClient.post<Iregisterlogin>(this.baseUrl+'adduser', user)
        .pipe(catchError(this.handleError));
    }

    login(user: Iregisterlogin): Observable<Iregisterlogin> {
        return this.httpClient.post<Iregisterlogin>(this.baseUrl+'login', user)
        .pipe(catchError(this.handleError));
    }

    // addSeller(user: Iregisterlogin): Observable<Iregisterlogin> {
    //     return this.httpClient.post<Iregisterlogin>(this.baseUrl+'register.php', user)
    //     // return this.httpClient.post<Iregisterlogin>(this.baseUrl+'user', user)
    //     .pipe(catchError(this.handleError));
    // }
    
    // loginUser(user: Iregisterlogin): Observable<Iregisterlogin> {
    //     return this.httpClient.post<Iregisterlogin>(this.baseUrl+'user/login', user)
    //     .pipe(catchError(this.handleError));
    // }
}
