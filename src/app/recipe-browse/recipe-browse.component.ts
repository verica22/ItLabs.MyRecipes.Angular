import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng2PaginationModule } from 'ng2-pagination';
import { NotificationBarService, NotificationType } from 'angular2-notification-bar'
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-recipe-browse',
  templateUrl: './recipe-browse.component.html',
  styleUrls: ['./recipe-browse.component.css']
})

export class RecipeBrowseComponent implements OnInit {
  title = 'My Recipes!';
  recipes: Recipe[];
  loading: boolean = false;
  currentUser: User;
  users: User[] = [];

  constructor(
    private _recipeService: RecipeService,
    private router: Router,
    private _notificationBarService: NotificationBarService,
    private userService: UserService
  ) {
    // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.listRecipes();
    // this.loadAllUsers();
    // if (this._recipeService.isLoggedIn) {
    //   this.listRecipes();
    // }
    // else {
    //   this.router.navigate(['/recipe-login']);
    // }


  }
  // deleteUser(id: number) {
  //   this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
  // }

  // private loadAllUsers() {
  //   this.userService.getAll().subscribe(users => { this.users = users; });
  // }

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
        if (recipes.length == 0) {

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
