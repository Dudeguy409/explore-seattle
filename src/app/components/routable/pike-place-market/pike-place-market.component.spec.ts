import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PikePlaceMarketComponent } from './pike-place-market.component';

describe('PikePlaceMarketComponent', () => {
  let component: PikePlaceMarketComponent;
  let fixture: ComponentFixture<PikePlaceMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PikePlaceMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PikePlaceMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
