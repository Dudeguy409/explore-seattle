import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndergroundTourComponent } from './underground-tour.component';

describe('UndergroundTourComponent', () => {
  let component: UndergroundTourComponent;
  let fixture: ComponentFixture<UndergroundTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndergroundTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndergroundTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
