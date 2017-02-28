import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RecipeService } from './services/recipe.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { Ng2PaginationModule } from 'ng2-pagination';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { RecipeAboutComponent } from './recipe-about/recipe-about.component';
import { RecipeFindUsComponent } from './recipe-find-us/recipe-find-us.component';
import { RecipeBrowseComponent } from './recipe-browse/recipe-browse.component';
import { NotificationBarModule } from 'angular2-notification-bar'


const appRoutes: Routes = [
  { path: 'recipe-list', component: RecipeListComponent },
  { path: '', redirectTo: 'recipe-list', pathMatch: 'full' },
  { path: 'recipe-browse', component: RecipeBrowseComponent },
  { path: 'recipe-create', component: RecipeCreateComponent },
  { path: 'recipe-about', component: RecipeAboutComponent },
  { path: 'recipe-findUs', component: RecipeFindUsComponent },
  { path: 'recipe-details/:id', component: RecipeDetailsComponent },
  { path: 'recipe-edit', component: RecipeEditComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RecipeCreateComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailsComponent,
    RecipeAboutComponent,
    RecipeFindUsComponent,
    RecipeBrowseComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2PaginationModule,
    Ng2AutoCompleteModule,
    NotificationBarModule
  ],

  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
