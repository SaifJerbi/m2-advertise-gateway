import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class Register {

    constructor(private http: Http) {}

    save(account: any): Observable<any> {
        return this.http.post('m2advertiseuaa/api/register', account);
    }
}
