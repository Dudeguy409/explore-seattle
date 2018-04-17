import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesAndBarcadesComponent } from './games-and-barcades.component';

describe('GamesAndBarcadesComponent', () => {
  let component: GamesAndBarcadesComponent;
  let fixture: ComponentFixture<GamesAndBarcadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesAndBarcadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesAndBarcadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
