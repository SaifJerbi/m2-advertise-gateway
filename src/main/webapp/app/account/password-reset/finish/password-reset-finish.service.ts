import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PasswordResetFinishService {

    constructor(private http: Http) {}

    save(keyAndPassword: any): Observable<any> {
        return this.http.post('m2advertiseuaa/api/account/reset-password/finish', keyAndPassword);
    }
}
