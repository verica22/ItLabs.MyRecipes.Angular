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
  var router, location;
  beforeEach(() => {
    page = new MyRecipesPage();
  });

  it('should have title', () => {
    browser.get('/recipe-create');
    browser.sleep(2000);
    let title = element(by.tagName('h3')).getText();
    expect(title).toEqual('Create New Recipe');
  });

  it('should have recipe', () => {
    browser.get('/recipe-browse');
    browser.sleep(3000);
    let recipe = element(by.tagName('li')).isElementPresent;
    expect(recipe).actual;
  });

  it('should have recipe details/:Chocolate Gravy', () => {
    browser.get('/recipe-details/Chocolate Gravy');
    browser.sleep(3000);
    let recipe = element(by.tagName('div')).isElementPresent;
    expect(recipe).actual;
  });

  it('should not have recipe details/:Something', () => {
    browser.get('/recipe-details/:Something');
    browser.sleep(2000);
    let recipe = element(by.tagName('div')).isElementPresent;
    expect(recipe).toBeNull;
  });

  it('should show autocomplete', () => {
    browser.get('/recipe-about');
    element(by.css('input[type=text]')).sendKeys('Chocolate');
    browser.sleep(3000);
  });

  it('should search recipe', () => {
    browser.get('/recipe-about');
    element(by.css('input[type=text]')).sendKeys('Chocolate Gravy');
    element(by.css('button')).click();
    browser.sleep(3000);
  });

  it('should check if submit button is disabled', () => {
    browser.get('/recipe-create');
    element(by.css('input[type=text]')).sendKeys('Chocolate');
    element(by.css('textarea')).sendKeys('Chocolate gregergerwgergergewrg');
    browser.sleep(2000);
    element(by.css('button')).click();
    let submitButton = element(by.css('button'));
    let isDisabled = submitButton.getAttribute('disabled');
    expect(isDisabled).toEqual(null);
  });


});
