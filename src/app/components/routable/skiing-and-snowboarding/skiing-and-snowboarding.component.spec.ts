import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiingAndSnowboardingComponent } from './skiing-and-snowboarding.component';

describe('SkiingAndSnowboardingComponent', () => {
  let component: SkiingAndSnowboardingComponent;
  let fixture: ComponentFixture<SkiingAndSnowboardingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiingAndSnowboardingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiingAndSnowboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
