import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { FilterPipe } from '../pipes/filter.pipe';
import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/ingredient';

@Component({
  selector: 'app-recipe-edit',
  providers: [RecipeService],
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent {
  @Input() recipe: Recipe;
  ingredients: Ingredient[];
  recipes: Recipe[];
  oldName: string;
  constructor(private _recipeService: RecipeService) { }

  addRecipe() {
    this._recipeService.getRecipe().subscribe(recipes => {
      this.recipes = recipes;
    });
  }
  updateRecipe(OldName: string, Name: string, Description: string, IsDone:boolean, IsFavorite:boolean, Ingredients) {
    this._recipeService.updateRecipe(OldName,new Recipe(Name, Description, IsDone, IsFavorite, Ingredients))
      .subscribe(recipes => {
        this.addRecipe();
      });
  }

  getIngredients(term) {
    this._recipeService.getIngredient(term).subscribe(ingredients => {
      this.ingredients = ingredients;
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