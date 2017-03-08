import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RecipeCreateComponent } from './recipe-create.component';
import { element, by, browser } from 'protractor';

describe('CreateRecipeComponent', () => {
  let component: RecipeCreateComponent;
  let fixture: ComponentFixture<RecipeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeCreateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // describe('CreateRecipeComponent', () => {

    it('should have title', () => {
      //  browser.get('/recipe-create');
      let title = element(by.tagName('h3')).getText();
      expect(title).toEqual('Create New Recipe');
    });
  // });
});
