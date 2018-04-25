import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTripComponent } from './first-trip.component';

describe('FirstTripComponent', () => {
  let component: FirstTripComponent;
  let fixture: ComponentFixture<FirstTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
