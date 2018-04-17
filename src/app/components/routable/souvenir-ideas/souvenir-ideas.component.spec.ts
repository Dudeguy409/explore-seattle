import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouvenirIdeasComponent } from './souvenir-ideas.component';

describe('SouvenirIdeasComponent', () => {
  let component: SouvenirIdeasComponent;
  let fixture: ComponentFixture<SouvenirIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouvenirIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouvenirIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
