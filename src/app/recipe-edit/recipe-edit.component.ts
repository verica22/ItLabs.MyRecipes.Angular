import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { FilterPipe } from '../pipes/filter.pipe';
import { Recipe } from '../models/recipe';
import { RecipeIngredient } from '../models/recipeingredient';
enum Measurement {
  Kg = 1,
  g = 2,
  l = 3,
  Number = 4,
  Spoon = 5,
  Teaspoon = 6, 
  Dessertspoon = 7,
  Gallon = 8,
  Cup = 9
}
@Component({
  selector: 'app-recipe-edit',
  providers: [RecipeService],
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent {
  @Input() recipe: Recipe;
  ingredients: RecipeIngredient[];
  recipes: Recipe[];
  oldName: string;
  options: string[];
  myValue: Measurement;
  Measurement: typeof Measurement = Measurement;

  constructor(private _recipeService: RecipeService) { }
   ngOnInit() {
    var x = Measurement;
    var options = Object.keys(Measurement);
    this.options = options.slice(options.length / 2);
  }

  parseValue(value: string) {
    this.myValue = Measurement[value];
    
  }
  listRecipes() {
    this._recipeService.getRecipe().subscribe(recipes => {
      this.recipes = recipes;
    });
  }
  updateRecipe(OldName: string, Name: string, Description: string, IsDone: boolean, IsFavorite: boolean, Ingredients) {
    this._recipeService.updateRecipe(OldName, new Recipe(Name, Description, IsDone, IsFavorite, Ingredients))
      .subscribe(recipes => {
        this.listRecipes();
      });
  }
  getIngredients(term) {
    this._recipeService.getIngredient(term).subscribe(ingredients => {
      this.ingredients = ingredients;
    });
  }
 addedIngredients: RecipeIngredient[] = [];
  addIngredient(name: string, measurement: string, quantity: number) {
    this.addedIngredients.push(new RecipeIngredient(name, measurement, quantity));
  }
  removeIngredient(ingredient: RecipeIngredient) {
    var index = this.addedIngredients.indexOf(ingredient);
    this.addedIngredients.splice(index, 1);
  }
  chooseIngredient(ingredient) {
    this.ingredients = [];
  }
}