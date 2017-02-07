import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(recipes: any, search: any): any {
    if(search === undefined) return recipes;
    return recipes.filter(function(recipe){
      return recipe.Name.toLowerCase().includes(search.toLowerCase());
    })
  }

}
