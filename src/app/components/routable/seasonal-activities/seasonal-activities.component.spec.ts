import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonalActivitiesComponent } from './seasonal-activities.component';

describe('SeasonalActivitiesComponent', () => {
  let component: SeasonalActivitiesComponent;
  let fixture: ComponentFixture<SeasonalActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonalActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonalActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
