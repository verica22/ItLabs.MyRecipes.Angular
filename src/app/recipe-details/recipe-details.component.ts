import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';
import { RecipeIngredients } from '../models/recipeIngredients';

@Component({
  selector: 'app-recipe-details',
  providers: [RecipeService],
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']

})

export class RecipeDetailsComponent {
  @Input() recipe: Recipe;
}