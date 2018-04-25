import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurbListComponent } from './blurb-list.component';

describe('BlurbListComponent', () => {
  let component: BlurbListComponent;
  let fixture: ComponentFixture<BlurbListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlurbListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlurbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
