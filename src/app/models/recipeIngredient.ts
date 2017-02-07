export class RecipeIngredient {
    constructor(
            public recipeId: number = 0,
            public ingredientId: number = 0,
            public recipeName: string = '',
            public ingredientName: string = '',
            public measurement: string = '',
            public quantity: number = 0
            ) {
    }
}