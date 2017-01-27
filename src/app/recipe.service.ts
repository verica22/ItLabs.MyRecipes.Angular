import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class RecipeService {

  constructor(private _http: Http) { }

  getData() {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.get('http://localhost:7520/recipes')
      .map(res => {
        console.log(res);
        return res.json();
      });
  }

  saveData(info) {

    return this._http.post('http://localhost:7520/recipes', info)
      .map(res => {
        console.log(res);
        return res.json();
      });

  }
}
