import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {
  constructor(private _http: Http) {
  }

  getRecipe() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.get('http://recipes-api.devweb.office.it-labs.com/recipes')
      .map(res => {
        console.log(res);
        return res.json();
      });
  }

  searchRecipe(name, done, favorite, page, pageSize) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(`http://recipes-api.devweb.office.it-labs.com/recipes?searchRequest.name=${name}&searchRequest.isDone=${done}&searchRequest.isFavorite=${favorite}&searchRequest.page=${page}&searchRequest.pageSize=${pageSize}`)
      .map(res => {
        console.log(res);
        return res.json();
      });
  }

  saveRecipe(recipe) {
    return this._http.post('http://recipes-api.devweb.office.it-labs.com/recipes', recipe)
      .map(res => res.json());
  }

  updateRecipe(name, recipe) {
    //return this._http.put('http://recipes-api.devweb.office.it-labs.com/recipes?name='+ name, recipe)
    return this._http.put('http://localhost:7520/recipes?name=' + name, recipe)
      .map(res => res.json());
  }
  
  deleteRecipe(recipe) {
    return this._http.delete('http://localhost:7520/recipes/' + recipe.name);
  }
  
  getIngredient(term) {
    return this._http.get('http://recipes-api.devweb.office.it-labs.com/Ingredient?name=' + term)
      .map(res => {
        console.log(res);
        return res.json();
      });
}
  searchRecipeByName(term) {
    return this._http.get('http://localhost:7520/Recipes?name=' + term)
      .map(res => {
        console.log(res);
        return res.json();
      });
  }


}