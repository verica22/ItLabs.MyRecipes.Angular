import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng2PaginationModule } from 'ng2-pagination';
import { NotificationBarService, NotificationType } from 'angular2-notification-bar'
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipe-browse',
  templateUrl: './recipe-browse.component.html',
  styleUrls: ['./recipe-browse.component.css']
})

export class RecipeBrowseComponent implements OnInit {
  title = 'My Recipes!';
  recipes: Recipe[];
  loading: boolean = false;

  constructor(
    private _recipeService: RecipeService,
    private router: Router,
    private _notificationBarService: NotificationBarService
  ) { }

  ngOnInit() {
    this.listRecipes();
  }

  listRecipes() {
    this.loading = true;
    this._recipeService.getRecipes()
      .subscribe(recipes => {
        this.recipes = recipes;
        this.loading = false;
      });
  }

  searchRecipe(name, done, favorite, currentPage, itemsPerPage) {
    this._recipeService.searchRecipe(name, done, favorite, currentPage, itemsPerPage)
      .subscribe(recipes => {
        this.recipes = recipes;
        if(recipes.length ==0){

this._notificationBarService.create({ message: 'There are no results that match your search', type: NotificationType.Info });
        }
      });
  }

  onSelect(recipe: Recipe): void {
    this.router.navigate(['/recipe-details', recipe.Name]);
  }

  deleteRecipe(name) {
    this._recipeService.deleteRecipe(name)
      .subscribe(recipes => {
        this._notificationBarService.create({ message: 'The recipe was successfully deleted', type: NotificationType.Success });
        this.listRecipes();
      });

  }
}
