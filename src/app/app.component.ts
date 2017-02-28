import { Component, OnInit } from '@angular/core';
import { RecipeService } from './services/recipe.service';
import { Recipe } from './models/recipe';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'My Recipes!';
  recipes: Recipe[];

  constructor(
    private _recipeService: RecipeService,
    private router: Router) { }

  ngOnInit() {
  }

  getRecipes(term) {
    this._recipeService.searchRecipeByName(term)
      .subscribe(recipes => {
        this.recipes = recipes;
      });
  }

  chooseRecipes(recipe) {
    this.recipes = [];
  }

  onSelect(name) {
    this.router.navigate(['/recipe-details', name]);
  }
}
