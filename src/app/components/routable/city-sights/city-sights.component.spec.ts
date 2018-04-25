import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySightsComponent } from './city-sights.component';

describe('CitySightsComponent', () => {
  let component: CitySightsComponent;
  let fixture: ComponentFixture<CitySightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitySightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
