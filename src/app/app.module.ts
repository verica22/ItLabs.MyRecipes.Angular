import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RecipeService } from './services/recipe.service';
import { AppComponent } from './app.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import {Ng2PaginationModule} from 'ng2-pagination';


const appRoutes: Routes = [
  { path: 'recipe-list', component: RecipeListComponent },
  { path: '', redirectTo: 'recipe-list', pathMatch: 'full' },
  { path: 'recipe-create', component: RecipeCreateComponent },
  { path: 'recipe-details/:id', component: RecipeDetailsComponent },
  { path: 'recipe-edit', component: RecipeEditComponent }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    RecipeCreateComponent,
    RecipeSearchComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailsComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     AppRoutingModule,
      Ng2PaginationModule
    // RouterModule.forRoot(appRoutes)
  ],
  //  exports: [
  //   RouterModule
  // ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
