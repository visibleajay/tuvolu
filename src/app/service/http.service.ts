import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  constructor(public http: Http) { }

  getData(value: string) {
    return this.http.get(`http://api.tvmaze.com/search/shows?q=${value}`)
             .map((res: Response) => res.json())
             .catch((error) => {
                console.error(error);
                return Observable.throw(error);
             });
  }
}
