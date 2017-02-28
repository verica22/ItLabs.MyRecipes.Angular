import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng2PaginationModule } from 'ng2-pagination';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})

export class RecipeListComponent {
  title = 'My Recipes!';
  recipes: Recipe[];
  loading: boolean = false;

  constructor(
    private _recipeService: RecipeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.listRecipes();
  }

  listRecipes() {
    this.loading = true;
    this._recipeService.getRecipes().subscribe(recipes => {
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
    this.router.navigate(['/recipe-details', recipe.Name]);
  }

  deleteRecipe(name) {
    if (confirm('Are you sure?')) {
      this._recipeService.deleteRecipe(name)
        .subscribe(recipes => {
          this.listRecipes();
        });
    }
  }
  
}
