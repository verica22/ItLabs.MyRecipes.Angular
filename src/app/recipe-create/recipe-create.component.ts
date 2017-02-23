import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { FilterPipe } from '../pipes/filter.pipe';
import { Recipe } from '../models/recipe';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { RecipeIngredient } from '../models/recipeIngredient';
// import { Measurement } from '../models/measurement';

enum Measurement {
  Kg = 1,
  g = 2,
  l = 3,
  Number = 4,
  Spoon = 5,
  Teaspoon = 6,
  Dessertspoon = 7,
  Gallon = 8,
  Cup = 9
}

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
  ingredients: RecipeIngredient[];
  constructor(private _recipeService: RecipeService) { }

  ngOnInit() {
    var x = Measurement;
    var options = Object.keys(Measurement);
    this.options = options.slice(options.length / 2);
  }

  parseValue(value: string) {
    this.myValue = Measurement[value];
    // this.isOffline = this.myValue == Measurement.offline;
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

  addedIngredients: RecipeIngredient[] = [];
  addIngredient(ingredientName: string, measurement: string, quantity: number) {
    this.addedIngredients.push(new RecipeIngredient(ingredientName, measurement, quantity));
  }

  removeIngredient(ingredient: RecipeIngredient) {
    var index = this.addedIngredients.indexOf(ingredient);
    this.addedIngredients.splice(index, 1);
  }
  
  chooseIngredient(ingredient) {
    this.ingredients = [];
  }

} 
