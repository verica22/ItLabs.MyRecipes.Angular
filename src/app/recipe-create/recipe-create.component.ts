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
  private searchTerms = new Subject<string>();
  constructor(private _recipeService: RecipeService) { }
  ngOnInit() {
  }

  addRecipe() {
    this._recipeService.getRecipe().subscribe(recipes => {
      this.recipes = recipes;
    });
  }
  saveRecipe(Name, Description, IsDone, IsFavorite, Ingredients) {
    //  e.preventDefault();
    // this._recipeService.saveRecipe({ Name: e.target.name.value, Description: e.target.description.value, isDone: e.target.doneRecipe.value, isFavorite: e.favoriteRecipe.value })
    this._recipeService.saveRecipe({ Name, Description, IsDone, IsFavorite, Ingredients })
      .subscribe(recipes => {
        this.addRecipe();
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

  removeIngredient(ingredient: any) {
    this.addedIngredients.splice(this.addedIngredients.indexOf(ingredient));
  }
  chooseIngredient(ingredient) {
    this.ingredients = [];
  }

} 
