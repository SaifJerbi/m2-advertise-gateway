import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ActivateService {

    constructor(private http: Http) {}

    get(key: string): Observable<any> {
        const params: URLSearchParams = new URLSearchParams();
        params.set('key', key);

        return this.http.get('m2advertiseuaa/api/activate', {
            search: params
        }).map((res: Response) => res);
    }
}
