import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeceptionPassComponent } from './deception-pass.component';

describe('DeceptionPassComponent', () => {
  let component: DeceptionPassComponent;
  let fixture: ComponentFixture<DeceptionPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeceptionPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeceptionPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
