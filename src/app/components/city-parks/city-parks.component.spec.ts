import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityParksComponent } from './city-parks.component';

describe('CityParksComponent', () => {
  let component: CityParksComponent;
  let fixture: ComponentFixture<CityParksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityParksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityParksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
