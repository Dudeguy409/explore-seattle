import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodinvilleComponent } from './woodinville.component';

describe('WoodinvilleComponent', () => {
  let component: WoodinvilleComponent;
  let fixture: ComponentFixture<WoodinvilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoodinvilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodinvilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
