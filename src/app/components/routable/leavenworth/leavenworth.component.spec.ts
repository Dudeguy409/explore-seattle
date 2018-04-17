import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavenworthComponent } from './leavenworth.component';

describe('LeavenworthComponent', () => {
  let component: LeavenworthComponent;
  let fixture: ComponentFixture<LeavenworthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavenworthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavenworthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
