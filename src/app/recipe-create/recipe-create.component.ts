import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { RecipeIngredients } from '../models/recipeIngredients';
import { Measurement } from '../models/measurement';

@Component({
  selector: 'app-recipe-create',
  providers: [RecipeService],
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})

export class RecipeCreateComponent implements OnInit {
  options: string[];
  myValue: Measurement;
  Measurement: typeof Measurement = Measurement;
  recipes: Recipe[];
  recipeIngredients: RecipeIngredients[] = [];
  constructor(private _recipeService: RecipeService) { }

  ngOnInit() {
   var x = Measurement;
    var options = Object.keys(Measurement);
    this.options = options.slice(options.length / 2);
  }

  parseValue(value: string) {
    this.myValue = Measurement[value];
  }

  listRecipes() {
    this._recipeService.getRecipe().subscribe(recipes => {
      this.recipes = recipes;
    });
  }

  saveRecipe(Name, Description, IsDone, IsFavorite, RecipeIngredients) {
    this._recipeService.saveRecipe({ Name, Description, IsDone, IsFavorite, RecipeIngredients })
      .subscribe(recipes => {
        this.listRecipes();
      });
  }

  getIngredients(term) {
    this._recipeService.getIngredient(term)
      .subscribe(ingredients => {
        this.recipeIngredients = ingredients;
          console.log(this.recipeIngredients);
      });
  }

  addedIngredients: RecipeIngredients[] = [];
  addIngredient(ingredientName: string, measurement: string, quantity: number) {
    this.addedIngredients.push(new RecipeIngredients(ingredientName, measurement, quantity));
  }
  removeIngredient(ingredient: RecipeIngredients) {
    var index = this.recipeIngredients.indexOf(ingredient);
    this.recipeIngredients.splice(index, 1);
  }

  chooseIngredient(ingredient) {
    this.recipeIngredients = [];
  }

} 
