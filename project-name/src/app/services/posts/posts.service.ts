import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from '../../../../node_modules/rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl='https://jsonplaceholder.typicode.com/users';
  constructor(private _http: Http) { }
  getListPost(): Observable<any>{
    return this._http.get(this.apiUrl)
            .map((response: Response) => <any>response.json());
    }

}
