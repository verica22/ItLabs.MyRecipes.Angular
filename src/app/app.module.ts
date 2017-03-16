import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RecipeService } from './services/recipe.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { Ng2PaginationModule } from 'ng2-pagination';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { RecipeAboutComponent } from './recipe-about/recipe-about.component';
import { RecipeFindUsComponent } from './recipe-find-us/recipe-find-us.component';
import { RecipeBrowseComponent } from './recipe-browse/recipe-browse.component';
import { NotificationBarModule } from 'angular2-notification-bar';
import { RecipeLoginComponent } from './recipe-login/recipe-login.component'
import { RecipeRegisterComponent } from './recipe-register/recipe-register.component'
// used to create fake backend
import { fakeBackendProvider } from './helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authenticate.service';
import { AuthGuard } from './guards/auth.guard';
import { AlertService } from './services/alert.service';
//import { Angular2SocialLoginModule } from "angular2-social-login";

const appRoutes: Routes = [
  { path: '', redirectTo: 'recipe-about', pathMatch: 'full' },
  { path: 'recipe-login', component: RecipeLoginComponent },
  { path: 'recipe-register', component: RecipeRegisterComponent },
  { path: 'recipe-about', component: RecipeAboutComponent },
  { path: 'recipe-browse', component: RecipeBrowseComponent },
  { path: 'recipe-create', component: RecipeCreateComponent },
  { path: 'recipe-findUs', component: RecipeFindUsComponent },
  { path: 'recipe-details/:id', component: RecipeDetailsComponent }
];

let providers = {
  "google": {
    "clientId": "GOOGLE_CLIENT_ID"
  },
  "linkedin": {
    "clientId": "LINKEDIN_CLIENT_ID"
  },
  "facebook": {
    "clientId": "FACEBOOK_CLIENT_ID",
    "apiVersion": "v2.4"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    RecipeCreateComponent,
    RecipeDetailsComponent,
    RecipeAboutComponent,
    RecipeFindUsComponent,
    RecipeBrowseComponent,
    RecipeLoginComponent,
    RecipeRegisterComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2PaginationModule,
    Ng2AutoCompleteModule,
    NotificationBarModule,
    //Angular2SocialLoginModule.initWithProviders(providers)
  ],

  providers: [
    RecipeService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    // providers used to create fake backend
  //  fakeBackendProvider,
    // MockBackend,
    // BaseRequestOptions
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
