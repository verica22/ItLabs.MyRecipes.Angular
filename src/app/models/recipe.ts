import { RecipeIngredient } from './recipeingredient';

export class Recipe {
    constructor(
        public Name: string = '',
        public Description: string = '',
        public IsDone: boolean = false,
        public IsFavorite: boolean = false,
        public RecipeIngredients: RecipeIngredient[] = []
    ) {
    }
}

