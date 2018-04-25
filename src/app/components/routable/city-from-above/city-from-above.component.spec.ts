import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityFromAboveComponent } from './city-from-above.component';

describe('CityFromAboveComponent', () => {
  let component: CityFromAboveComponent;
  let fixture: ComponentFixture<CityFromAboveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityFromAboveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityFromAboveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
