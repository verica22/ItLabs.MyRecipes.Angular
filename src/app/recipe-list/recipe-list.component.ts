import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { FilterPipe } from '../pipes/filter.pipe';
import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/ingredient';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  title = 'My Recipes!';
  recipes: Recipe[];
  selectedRecipe: Recipe;
   selectedRecipe2: Recipe;

  constructor(private _recipeService: RecipeService,
    private _router: RouterModule) { }
  ngOnInit() {
    this.addRecipe();
  }

  addRecipe() {
    this._recipeService.getRecipe().subscribe(recipes => {
      this.recipes = recipes;
    });
  }

  searchRecipe(name, done, favorite) {
    this._recipeService.searchRecipe(name, done, favorite).subscribe(recipes => {
      this.recipes = recipes;
    });
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
  onEdit(recipe: Recipe): void {
    this.selectedRecipe2 = recipe;
  }

  deleteRecipe(recipe) {
    if (confirm('Are you sure?')) {
      this._recipeService.deleteRecipe({ name: recipe.Name })
        .subscribe(recipes => {
          this.addRecipe();
        });
    }
  }
}