import { Ingredient } from './ingredient';
import { RecipeIngredient } from './recipeingredient';

export class Recipe {
    constructor(
            // public id: number = 0,
            public name: string = '',
            public description: string = '',
            public isDone: boolean = false,
            public isFavorite: boolean = false,
            public ingredients: Ingredient[] = []
            // public recipeIngredients: RecipeIngredient[] = []
            ) {
    }
}

