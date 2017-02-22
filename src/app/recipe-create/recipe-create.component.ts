import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { FilterPipe } from '../pipes/filter.pipe';
import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/ingredient';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { RecipeIngredient } from '../models/recipeIngredient';
import 'rxjs/Rx';
@Component({
  selector: 'app-recipe-create',
  providers: [RecipeService],
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent implements OnInit {
  recipes: Recipe[];
  ingredients: Ingredient[];
  constructor(private _recipeService: RecipeService) { }
  ngOnInit() {
  }
  listRecipes() {
    this._recipeService.getRecipe().subscribe(recipes => {
      this.recipes = recipes;
    });
  }
  saveRecipe(Name, Description, IsDone, IsFavorite, Ingredients) {
    this._recipeService.saveRecipe({ Name, Description, IsDone, IsFavorite, Ingredients })
      .subscribe(recipes => {
        this.listRecipes();
      });
  }
  getIngredients(term) {
    this._recipeService.getIngredient(term)
      .subscribe(ingredients => {
        this.ingredients = ingredients;
        console.log(this.ingredients);
      });
  }
  addedIngredients: Ingredient[] = [];
  addIngredient(name: string, measurement: string, quantity: number) {
    this.addedIngredients.push(new Ingredient(name, measurement, quantity));
  }
  removeIngredient(ingredient: Ingredient) {
    var index = this.addedIngredients.indexOf(ingredient);
    this.addedIngredients.splice(index, 1);
  }
  chooseIngredient(ingredient) {
    this.ingredients = [];
  }
} 
