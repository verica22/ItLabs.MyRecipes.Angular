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
  myVar = true;
  myVar2 = "fasf";
  // ingredients = [
  //   {name:"Sugar", measurement:"spoon", quantity:3},
  //   {name:"Salt", measurement:"teaspoon", quantity:4},
  //   {name:"Cofee", measurement:"spoon", quantity:5}
  // ];
  constructor(private _recipeService: RecipeService) { }
  ngOnInit() {
    // this.addRecipe();
    // this.getIngredients();
    //  this.searchStr;  
  }

  // addRecipe() {
  //   this._recipeService.getRecipe().subscribe(recipes => {
  //     this.recipes = recipes;
  //   });
  // }

  // saveRecipe(e) {
  //   e.preventDefault();
  //   this._recipeService.saveRecipe({ name: e.target.name.value, description: e.target.description.value, done: e.target.done.value, favourite: e.target.favourite.value })
  //     .subscribe(recipes => {
  //       this.addRecipe();
  //     });
  // }

  // deleteRecipe(recipe) {
  //   if (confirm('Are you sure?')) {
  //     this._recipeService.deleteRecipe({ name: recipe.Name })
  //       .subscribe(recipes => {
  //         this.addRecipe();
  //       });
  //   }
  // }

  // getIngredients() {
  //   this._recipeService.getIngredient().subscribe(ingredients => {
  //     this.ingredients = ingredients;
  //   });
  // }

//   addedIngredients: any = [];
//   addIngredient(ingredient: any) {
//     this.addedIngredients.push(ingredient);
//     // console.log(recipe);
//   }

//   removeIngredient(ingredient: any) {
//     this.addedIngredients.splice(this.addedIngredients.indexOf(ingredient));
//   }
//   checkbox(recipe) {
//     recipe.selected = (recipe.selected) ? false : true;
//   }

//   searchRecipe(name,done,favorite) {
//   this._recipeService.searchRecipe(name,done,favorite).subscribe(recipes => {
//      this.recipes = recipes;
//     });

// }

//     getQuery(){
// const input:any=document.getElementById('searchStr')
//        console.log(input);
//       const searchStr$ = Observable.fromEvent(input,'keyup')
//       .do(()=>console.log(input.value));

//       searchStr$.subscribe();
//     }

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
