import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';


const appRoutes: Routes = [
  { path: 'recipe-list', component: RecipeListComponent },
  { path: '', redirectTo: 'recipe-list', pathMatch: 'full' },
  { path: 'recipe-create', component: RecipeCreateComponent },
  { path: 'recipe-details/:id', component: RecipeDetailsComponent },
  { path: 'recipe-edit', component: RecipeEditComponent }
  //  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
