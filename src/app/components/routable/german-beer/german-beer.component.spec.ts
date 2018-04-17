import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanBeerComponent } from './german-beer.component';

describe('GermanBeerComponent', () => {
  let component: GermanBeerComponent;
  let fixture: ComponentFixture<GermanBeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GermanBeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GermanBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
