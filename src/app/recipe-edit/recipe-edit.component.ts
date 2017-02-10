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
  
  constructor(private _recipeService: RecipeService) { }

  addRecipe() {
    this._recipeService.getRecipe().subscribe(recipes => {
      this.recipes = recipes;
    });
  }
  saveRecipe(Name, Description, IsDone, IsFavorite, Ingredients) {
    this._recipeService.saveRecipe({ Name, Description, IsDone, IsFavorite, Ingredients })
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
}