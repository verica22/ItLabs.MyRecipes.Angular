import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

export class RecipeDetailsComponent{
  recipe: Recipe;
  oldName: string;
  options: string[];
  myValue: Measurement;
  recipeingredients: RecipeIngredients[] = [];
  Measurement: typeof Measurement = Measurement;

  constructor(
    private route: ActivatedRoute,
    private _recipeService: RecipeService,
    private _router: Router
  ) { }

  ngOnInit() {
    var x = Measurement;
    var options = Object.keys(Measurement);
    this.options = options.slice(options.length / 2);

    let name = this.route.snapshot.params['name'];
    this._recipeService.searchRecipeByName(name)
      .subscribe(recipe => {
        this.recipe = recipe[0];
        this.oldName = recipe[0].Name;
      });
  }

  parseValue(value: string) {
    this.myValue = Measurement[value];
  }

  updateRecipe(oldname, Name, Description, IsDone, IsFavorite, RecipeIngredients) {
    this._recipeService.updateRecipe(oldname, new Recipe(Name, Description, IsDone, IsFavorite, RecipeIngredients))
      .subscribe(recipes => {
        this.recipe = recipes;
         if (confirm('The recipe was successfully updated!')) {
          this._router.navigate(['/recipe-details', recipes.Name]);
        }
      });
    // this._router.navigate(['/recipe-list']);
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

}
