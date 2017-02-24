import { RecipeIngredients } from './recipeingredients';

export class Recipe {
    constructor(
        // public Id: number = 0,
        public Name: string = '',
        public Description: string = '',
        public IsDone: boolean = false,
        public IsFavorite: boolean = false,
        public RecipeIngredients: RecipeIngredients[] = []
    ) {
    }
}

