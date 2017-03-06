import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationBarService, NotificationType } from 'angular2-notification-bar'
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';
import { RecipeIngredients } from '../models/recipeIngredients';
import { Measurement } from '../models/measurement';

@Component({
  selector: 'app-recipe-details',
  providers: [RecipeService],
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']

})

export class RecipeDetailsComponent {
  recipe: Recipe;
  oldName: string;
   oldRecipe: Recipe;
  options: string[];
  myValue: Measurement;
  recipeingredients: RecipeIngredients[] = [];
  Measurement: typeof Measurement = Measurement;

  constructor(
    private route: ActivatedRoute,
    private _recipeService: RecipeService,
    private _router: Router,
    private _notificationBarService: NotificationBarService
  ) { }

  ngOnInit() {
    var x = Measurement;
    var options = Object.keys(Measurement);
    this.options = options.slice(options.length / 2);

    let name = this.route.snapshot.params['name'];
        if (name) {
    this.getRecipe(name);
        }
    this._router.events
      .subscribe((recipe) => {
        let name = this.route.snapshot.params['name'];
            if (name) {
        this.getRecipe(name);
            }
      });
  }

  getRecipe(name) {
    this._recipeService.searchRecipeByName(name)
      .subscribe(recipe => {
                  if (recipe) {
        this.recipe = recipe[0];
        this.oldName = recipe[0].Name;
        this.oldRecipe = recipe[0];
                  }
      });
  }

  parseValue(value: string) {
    this.myValue = Measurement[value];
  }

  updateRecipe(oldname, Name, Description, IsDone, IsFavorite, RecipeIngredients) {
    this._recipeService.updateRecipe(oldname, new Recipe(Name, Description, IsDone, IsFavorite, RecipeIngredients))
      .subscribe(recipes => {
        this.recipe = recipes;
        this._notificationBarService.create({ message: 'The recipe was successfully updated', type: NotificationType.Success });
        let name = this.route.snapshot.params['name'];
        if (name) {
        this.getRecipe(name);
            }
      });
  }

  getIngredients(term) {
    this._recipeService.getIngredient(term).subscribe(ingredients => {
      this.recipeingredients = ingredients;
    });
  }

  addIngredient(IngredientName: string, Measurement: string, Quantity: number) {
    this.recipe.RecipeIngredients.push(new RecipeIngredients(IngredientName, Measurement, Quantity));
  }

  removeIngredient(recipeingredient: RecipeIngredients) {
    var index = this.recipe.RecipeIngredients.indexOf(recipeingredient);
    this.recipe.RecipeIngredients.splice(index, 1);
  }

  chooseIngredient(ingredient) {
    this.recipeingredients = [];
  }
  
  onCancel() {
    let name = this.route.snapshot.params['name'];
    this._recipeService.searchRecipeByName(name)
      .subscribe(recipe => {
        this.recipe = recipe[0];


      });
  }

}
