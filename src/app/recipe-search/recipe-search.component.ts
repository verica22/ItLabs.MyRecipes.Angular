import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { FilterPipe } from '../pipes/filter.pipe';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})

export class RecipeSearchComponent implements OnInit {
  title = 'My Recipes!';
  recipes: Recipe[];
  constructor(private _recipeService: RecipeService) { }
  ngOnInit() {
    this.addRecipe();
  }
  addRecipe() {
    this._recipeService.getRecipe().subscribe(recipes => {
      this.recipes = recipes;
    });
  }

}