import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestNeighborhoodsComponent } from './best-neighborhoods.component';

describe('BestNeighborhoodsComponent', () => {
  let component: BestNeighborhoodsComponent;
  let fixture: ComponentFixture<BestNeighborhoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestNeighborhoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestNeighborhoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
