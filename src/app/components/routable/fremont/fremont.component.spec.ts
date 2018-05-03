import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FremontComponent } from './fremont.component';

describe('FremontComponent', () => {
  let component: FremontComponent;
  let fixture: ComponentFixture<FremontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FremontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FremontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
