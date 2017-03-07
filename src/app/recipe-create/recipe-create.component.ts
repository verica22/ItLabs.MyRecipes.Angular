import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';
import { RecipeIngredients } from '../models/recipeIngredients';
import { Measurement } from '../models/measurement';
import { NotificationBarService, NotificationType } from 'angular2-notification-bar'

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css'],
  providers: [RecipeService]
})

export class RecipeCreateComponent {
  title = 'Create New Recipe';
  recipes: Recipe[];
  recipeIngredients: RecipeIngredients[] = [];

  options: string[];
  myValue: Measurement;
  Measurement: typeof Measurement = Measurement;

  constructor(
    private _recipeService: RecipeService,
    private _router: Router,
    private  _notificationBarService: NotificationBarService
  ) { }

  ngOnInit() {
    var x = Measurement;
    var options = Object.keys(Measurement);
    this.options = options.slice(options.length / 2);
  }

  parseValue(value: string) {
    this.myValue = Measurement[value];
  }

  saveRecipe(Name, Description, IsDone, IsFavorite, RecipeIngredients) {
    this._recipeService.saveRecipe({ Name, Description, IsDone, IsFavorite, RecipeIngredients })
      .subscribe(recipes => {
        this.recipes = recipes;
        this._notificationBarService.create({ message: 'The recipe was successfully saved', type: NotificationType.Success});
        this._router.navigate(['/recipe-details', recipes.Name]);
      });
    }

  getIngredients(term) {
    this._recipeService.getIngredient(term)
      .subscribe(ingredients => {
        this.recipeIngredients = ingredients;
      });
  }

  addedIngredients: RecipeIngredients[] = [];
  addIngredient(ingredientName: string, measurement: string, quantity: number) {
    this.addedIngredients.push(new RecipeIngredients(ingredientName, measurement, quantity));
  }

  removeIngredient(addedIngredients: RecipeIngredients) {
    var index = this.addedIngredients.indexOf(addedIngredients);
    this.addedIngredients.splice(index, 1);
  }

  chooseIngredient(ingredient) {
    this.recipeIngredients = [];
  }


} 
