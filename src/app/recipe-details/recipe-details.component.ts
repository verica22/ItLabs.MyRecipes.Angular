import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';
import { RecipeIngredients } from '../models/recipeIngredients';
import { Measurement } from '../models/measurement';
import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  providers: [RecipeService],
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']

})

export class RecipeDetailsComponent implements OnInit {
  //  recipe: Recipe;

  @Input() recipe: Recipe;
  recipeingredients: RecipeIngredients[] = [];
  recipes: Recipe[];
  @Input() oldName: string;
  options: string[];
  myValue: Measurement;
  Measurement: typeof Measurement = Measurement;
  id: number;
  name: string;
  private sub: any;
  constructor(
    private route: ActivatedRoute,
    private _recipeService: RecipeService,
    private _router: Router
  ) { }

  ngOnInit() {

    //  this.route.params
    //   .switchMap((params: Params) => this._recipeService.searchRecipe(+params['name']))
    //   .subscribe((recipe: Recipe) => this.recipe = recipe);

    var x = Measurement;
    var options = Object.keys(Measurement);
    this.options = options.slice(options.length / 2);

    // this.sub = this.route.params.subscribe(params => {
    //   this.name = +params['Name']; 
    // });

 this.sub = this.route.params.subscribe(params => {
      this.name = name; 
     
      //  this._recipeService.searchRecipe(name)
      // .subscribe(recipes => {
      //   this.recipes = recipes;
      // });
    });

  }

  parseValue(value: string) {
    this.myValue = Measurement[value];
  }

  updateRecipe(name, Name, Description, IsDone, IsFavorite, RecipeIngredients) {
    this._recipeService.updateRecipe(name, new Recipe(Name, Description, IsDone, IsFavorite, RecipeIngredients))
      .subscribe(recipes => {
      });
    this._router.navigate(['/recipe-list']);
  }

  getIngredients(term) {
    this._recipeService.getIngredient(term).subscribe(ingredients => {
      this.recipeingredients = ingredients;
    });
  }

  addIngredient(IngredientName: string, Measurement: string, Quantity: number) {
    this.recipe.RecipeIngredients.push(new RecipeIngredients(IngredientName, Measurement, Quantity));
  }

  removeIngredient(recipeingredients: RecipeIngredients) {
    var index = this.recipe.RecipeIngredients.indexOf(recipeingredients);
    this.recipe.RecipeIngredients.splice(index, 1);
  }

  chooseIngredient(ingredient) {
    this.recipeingredients = [];
  }

}
