import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeorgetownComponent } from './georgetown.component';

describe('GeorgetownComponent', () => {
  let component: GeorgetownComponent;
  let fixture: ComponentFixture<GeorgetownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeorgetownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeorgetownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
