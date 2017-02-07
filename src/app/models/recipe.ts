import { Ingredient } from './ingredient';

export class Recipe {
    constructor(
            public id: number = 0,
            public name: string = '',
            public description: string = '',
            public isDone: boolean = false,
            public isFavorite: boolean = false) {
    }
}

