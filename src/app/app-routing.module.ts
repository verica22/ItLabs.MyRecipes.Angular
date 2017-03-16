import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeAboutComponent } from './recipe-about/recipe-about.component';
import { RecipeFindUsComponent } from './recipe-find-us/recipe-find-us.component';
import { RecipeBrowseComponent } from './recipe-browse/recipe-browse.component';
import { RecipeLoginComponent } from './recipe-login/recipe-login.component';
import { RecipeRegisterComponent } from './recipe-register/recipe-register.component'
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: 'recipe-about', pathMatch: 'full' },
  { path: 'recipe-login', component: RecipeLoginComponent },
  { path: 'recipe-register', component: RecipeRegisterComponent },
  { path: 'recipe-browse', component: RecipeBrowseComponent },
  { path: 'recipe-create', component: RecipeCreateComponent },
  // { path: 'recipe-browse', component: RecipeBrowseComponent, canActivate: [AuthGuard]  },
  // { path: 'recipe-create', component: RecipeCreateComponent, canActivate: [AuthGuard]  },
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
