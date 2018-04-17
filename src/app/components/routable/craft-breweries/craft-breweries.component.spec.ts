import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftBreweriesComponent } from './craft-breweries.component';

describe('CraftBreweriesComponent', () => {
  let component: CraftBreweriesComponent;
  let fixture: ComponentFixture<CraftBreweriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraftBreweriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftBreweriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
