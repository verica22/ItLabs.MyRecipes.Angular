import { Component } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Recipes!';
  recipes: Recipe[];

  constructor(private _recipeService: RecipeService) { }
  ngOnInit() {
    this.addData();
  }

  addData() {
    this._recipeService.getData().subscribe(recipes => {
      this.recipes = recipes;
    });
  }
  saveData(e) {
    e.preventDefault();
    this._recipeService.saveData({ name: e.target.name.value, description: e.target.description.value, done: e.target.done.value, favourite: e.target.favourite.value })
      .subscribe(recipes => {
        this.addData();
      });
  }

}
interface Recipe {
  name: string,
  done?: boolean,
  favourite?: boolean
  description: string;
}
