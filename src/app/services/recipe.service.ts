import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ApiConfig } from '../api-config';

@Injectable()
export class RecipeService {
  constructor(private _http: Http) {
  }

  getRecipe() {
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    return this._http.get(ApiConfig.ApiGetRecipes)
      .map(res => {
        return res.json();
      });
  }

  searchRecipe(name, done, favorite, page, pageSize) {
    return this._http.get(`http://recipes-api.devweb.office.it-labs.com/recipes?searchRequest.name=${name}&searchRequest.isDone=${done}&searchRequest.isFavorite=${favorite}&searchRequest.page=${page}&searchRequest.pageSize=${pageSize}`)
      .map(res => {
        return res.json();
      });
  }

  saveRecipe(recipe) {
    return this._http.post(ApiConfig.ApiPostRecipes, recipe)
      .map(res => res.json());
  }

  updateRecipe(name, recipe) {
    return this._http.put('http://localhost:7520/recipes?name=' + name, recipe)
      //  return this._http.put('http://recipes-api.devweb.office.it-labs.com/Recipes?name=' + name, recipe)
      // return this._http.put(ApiConfig.ApiPutRecipes + name, recipe)
      .map(res => res.json());
  }

  deleteRecipe(recipe) {
    // return this._http.delete(ApiConfig.ApiDeleteRecipes + name)
    return this._http.delete('http://localhost:7520/recipes/' + recipe.name);
  }

  getIngredient(term) {
    return this._http.get(ApiConfig.ApiGetIngredient + term)
      .map(res => {
        return res.json();
      });
  }

  searchRecipeByName(term) {
    return this._http.get(ApiConfig.ApiGetRecipeByName + term)
      .map(res => {
        return res.json();
      });
  }


}