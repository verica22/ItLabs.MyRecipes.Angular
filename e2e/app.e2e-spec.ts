import { MyRecipesPage } from './app.po';
import { element, by, browser } from 'protractor';
import { RecipeService } from '../src/app/services/recipe.service';
import { Recipe } from '../src/app/models/recipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';
let fixture: ComponentFixture<MyRecipesPage>;

describe('my-recipes App', function () {
  let page: MyRecipesPage;
var router,location;
  beforeEach(() => {
    page = new MyRecipesPage();
  });

  it('should have title', () => {
    browser.get('/recipe-create');
    let title = element(by.tagName('h3')).getText();
    expect(title).toEqual('Create New Recipe');
  });

  it('should have recipe', () => {
    browser.get('/recipe-browse');
    let recipe = element(by.tagName('li')).isElementPresent;
    expect(recipe).actual;
  });

  it('should have recipe details/:Chocolate Gravy', () => {
    browser.get('/recipe-details/:Chocolate Gravy');
    let recipe = element(by.tagName('div')).isElementPresent;
    expect(recipe).actual;
  });

  it('should not have recipe details/:Something', () => {
    browser.get('/recipe-details/:Something');
    let recipe = element(by.tagName('div')).isElementPresent;
    expect(recipe).toBeNull;
  });
  
});
