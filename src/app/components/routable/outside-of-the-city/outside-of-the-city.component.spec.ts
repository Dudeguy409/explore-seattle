import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideOfTheCityComponent } from './outside-of-the-city.component';

describe('OutsideOfTheCityComponent', () => {
  let component: OutsideOfTheCityComponent;
  let fixture: ComponentFixture<OutsideOfTheCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OutsideOfTheCityComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsideOfTheCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});