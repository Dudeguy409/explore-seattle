import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlympicPeninsulaComponent } from './olympic-peninsula.component';

describe('OlympicPeninsulaComponent', () => {
  let component: OlympicPeninsulaComponent;
  let fixture: ComponentFixture<OlympicPeninsulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlympicPeninsulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlympicPeninsulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
