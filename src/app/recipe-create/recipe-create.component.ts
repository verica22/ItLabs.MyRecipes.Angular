import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { FilterPipe } from '../pipes/filter.pipe';
import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/ingredient';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx'; 

@Component({
  // moduleId: module.id,
  selector: 'app-recipe-create',
  providers: [RecipeService],
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent implements OnInit {
  recipes: Recipe[];
  ingredients: Ingredient[];
  // ingredients: Observable<Ingredient[]>;
  private searchTerms = new Subject<string>();
  constructor(private _recipeService: RecipeService
              //  private router: Router
        ) { }
  ngOnInit() {
    // this.addRecipe();
    // this.getIngredients(term);
    // this.search;
  }
  //   search(term: string): void {
  //   this.searchTerms.next(term);
  // }
  // ngOnInit(): void {
  //   this.ingredients = this.searchTerms
  //     .debounceTime(300)        // wait 300ms after each keystroke before considering the term
  //     .distinctUntilChanged()   // ignore if next search term is same as previous
  //     .switchMap(term => term   // switch to new observable each time the term changes
  //       // return the http search observable
  //       ? this._recipeService.search(term)
  //       // or the observable of empty heroes if there was no search term
  //       : Observable.of<Ingredient[]>([]))
  //     .catch(error => {
  //       // TODO: add real error handling
  //       console.log(error);
  //       return Observable.of<Ingredient[]>([]);
  //     });
  // }

   saveRecipe(e) {
    e.preventDefault();
    this._recipeService.saveRecipe({ name: e.target.name.value, description: e.target.description.value, done: e.target.done.value, favourite: e.target.favourite.value })
      .subscribe(recipes => {
        this.recipes=recipes;
      });
  }
  getIngredients(term) {
    this._recipeService.getIngredient(term).subscribe(ingredients => {
      this.ingredients = ingredients;
    });
  }

  // addedIngredients: any = [];
  // addIngredient(ingredient: any) {
  //   this.addedIngredients.push(ingredient);
  //   // console.log(recipe);
  // }

 addedIngredients: any = [];
  addIngredient(searchBox,measurement,quantity) {
    this.addedIngredients.push(searchBox,measurement,quantity);
     }

  removeIngredient(ingredient: any) {
    this.addedIngredients.splice(this.addedIngredients.indexOf(ingredient));
  }   
}