import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorActivitiesComponent } from './outdoor-activities.component';

describe('OutdoorActivitiesComponent', () => {
  let component: OutdoorActivitiesComponent;
  let fixture: ComponentFixture<OutdoorActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutdoorActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutdoorActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
