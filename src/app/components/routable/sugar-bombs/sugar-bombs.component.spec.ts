import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarBombsComponent } from './sugar-bombs.component';

describe('SugarBombsComponent', () => {
  let component: SugarBombsComponent;
  let fixture: ComponentFixture<SugarBombsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugarBombsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugarBombsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
