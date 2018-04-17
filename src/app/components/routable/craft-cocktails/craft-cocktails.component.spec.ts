import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftCocktailsComponent } from './craft-cocktails.component';

describe('CraftCocktailsComponent', () => {
  let component: CraftCocktailsComponent;
  let fixture: ComponentFixture<CraftCocktailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraftCocktailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftCocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
