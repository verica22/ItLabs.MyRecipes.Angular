import { Component } from '@angular/core';
import { RecipeService } from './services/recipe.service';
import { Recipe } from './models/recipe';
import { RecipeIngredients } from './models/recipeIngredients';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Recipes!';
  recipes: Recipe[];
  ingredients: RecipeIngredients[];
  constructor( private _recipeService: RecipeService,) { }
  ngOnInit() {
  }
   searchRecipe(name, done, favorite, currentPage, itemsPerPage) {
    this._recipeService.searchRecipe(name, done, favorite, currentPage, itemsPerPage)
      .subscribe(recipes => {
        this.recipes = recipes;
      });
  }
    getRecipes(term) {
    this._recipeService.searchRecipeByName(term)
      .subscribe(recipes => {
        this.recipes = recipes;
        console.log(this.recipes);
      });
  }
    chooseRecipes(recipe) {
    this.recipes = [];
  }
}
