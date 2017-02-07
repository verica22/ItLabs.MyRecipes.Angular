import { Component } from '@angular/core';
import { RecipeService } from './services/recipe.service';
import { FilterPipe } from './pipes/filter.pipe';
import { Recipe } from './models/recipe';
import { Ingredient } from './models/ingredient';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  //directives: [ ROUTER_DIRECTIVES ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Recipes!';
  recipes: Recipe[];
  ingredients: Ingredient[];
  constructor(private _recipeService: RecipeService) { }
  ngOnInit() {
    // this.addRecipe();
    // this.getIngredients();
   }
}
// interface Recipe {
//   name: string,
//   done?: boolean,
//   favourite?: boolean
//   description: string;
// }
// interface Ingredient {
//   name: string,
//   measurement: string;
//   // quantity: number;
// }
// interface RecipeIngredient {
//   quantity: number;
// }
