import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';
import { RecipeIngredients } from '../models/recipeingredients';
import { Measurement } from '../models/measurement';

@Component({
  selector: 'app-recipe-edit',
  providers: [RecipeService],
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})

export class RecipeEditComponent {
  @Input() recipe: Recipe;
  recipeingredients: RecipeIngredients[]= [];
  recipes: Recipe[];
  oldName: string;
  options: string[];
  myValue: Measurement;
  Measurement: typeof Measurement = Measurement;

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

  // updateRecipe(OldName: string, Name: string, Description: string, IsDone: boolean, IsFavorite: boolean, RecipeIngredients) {
     updateRecipe(name, Name, Description, IsDone, IsFavorite , RecipeIngredients) {
    this._recipeService.updateRecipe(name, new Recipe(Name, Description, IsDone, IsFavorite, RecipeIngredients))
      .subscribe(recipes => {
        this.listRecipes();
      });
  }

  getIngredients(term) {
    this._recipeService.getIngredient(term).subscribe(ingredients => {
      this.recipeingredients = ingredients;
    });
  }

  addIngredient(IngredientName: string, Measurement: string, Quantity: number) {
      this.recipe.RecipeIngredients.push(new RecipeIngredients(IngredientName, Measurement, Quantity));
  }

  removeIngredient(recipeingredients: RecipeIngredients) {
    var index = this.recipe.RecipeIngredients.indexOf(recipeingredients);
    this.recipe.RecipeIngredients.splice(index, 1);
  }

  chooseIngredient(ingredient) {
    this.recipeingredients = [];
  }
}