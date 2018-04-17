import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterActivitiesComponent } from './water-activities.component';

describe('WaterActivitiesComponent', () => {
  let component: WaterActivitiesComponent;
  let fixture: ComponentFixture<WaterActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
