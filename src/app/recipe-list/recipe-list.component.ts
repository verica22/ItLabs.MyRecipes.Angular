import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';
import { RecipeIngredients } from '../models/recipeIngredients';
import { RouterModule } from '@angular/router';
import { Ng2PaginationModule } from 'ng2-pagination';
import { ChangeDetectionStrategy, Input } from "@angular/core";
import { Observable } from 'rxjs/Observable';

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
  oldName: string;
  loading: boolean = false;

  constructor(
    private _recipeService: RecipeService,
    private _router: RouterModule
  ) { }

  ngOnInit() {
    this.listRecipes();
  }

  listRecipes() {
    this.loading = true;
    this._recipeService.getRecipe().subscribe(recipes => {
      this.recipes = recipes;
      this.loading = false;
    });
  }

  searchRecipe(name, done, favorite, currentPage, itemsPerPage) {
    this._recipeService.searchRecipe(name, done, favorite, currentPage, itemsPerPage)
      .subscribe(recipes => {
        this.recipes = recipes;
      });
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
    this.selectedRecipe2 = null;
  }

  onEdit(recipe: Recipe): void {
    this.selectedRecipe2 = new Recipe(recipe.Name, recipe.Description, recipe.IsDone, recipe.IsFavorite, recipe.RecipeIngredients);
    this.oldName = recipe.Name;
    this.selectedRecipe = null;
  }

  deleteRecipe(recipe) {
    if (confirm('Are you sure?')) {
      this._recipeService.deleteRecipe({ name: recipe.Name })
        .subscribe(recipes => {
          this.listRecipes();
        });
    }
  }
}
