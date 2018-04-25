import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallroomDancingComponent } from './ballroom-dancing.component';

describe('BallroomDancingComponent', () => {
  let component: BallroomDancingComponent;
  let fixture: ComponentFixture<BallroomDancingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallroomDancingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallroomDancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
