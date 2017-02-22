import { Ingredient } from './ingredient';
import { RecipeIngredient } from './recipeingredient';

export class Recipe {
    constructor(
        public Name: string = '',
        public Description: string = '',
        public IsDone: boolean = false,
        public IsFavorite: boolean = false,
        public Ingredients: Ingredient[] = [],
        public RecipeIngredients: RecipeIngredient[] = []
    ) {
    }
}

