import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { FilterPipe } from '../pipes/filter.pipe';
import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/ingredient';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { RecipeIngredient } from '../models/recipeIngredient';
import 'rxjs/Rx';


@Component({
  selector: 'app-recipe-about',
  providers: [RecipeService],
  templateUrl: './recipe-about.component.html',
  styleUrls: ['./recipe-about.component.css']
})
export class RecipeAboutComponent implements OnInit {

  constructor(private _recipeService: RecipeService) { }

  ngOnInit() {
  }

}
