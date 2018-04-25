import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadesComponent } from './cascades.component';

describe('CascadesComponent', () => {
  let component: CascadesComponent;
  let fixture: ComponentFixture<CascadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CascadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CascadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
