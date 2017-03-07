import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeAboutComponent } from './recipe-about/recipe-about.component';
import { RecipeFindUsComponent } from './recipe-find-us/recipe-find-us.component';
import { RecipeBrowseComponent } from './recipe-browse/recipe-browse.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'recipe-about', pathMatch: 'full' },
  { path: 'recipe-browse', component: RecipeBrowseComponent },
  { path: 'recipe-create', component: RecipeCreateComponent },
  { path: 'recipe-about', component: RecipeAboutComponent },
  { path: 'recipe-findUs', component: RecipeFindUsComponent },
  { path: 'recipe-details/:name', component: RecipeDetailsComponent },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
