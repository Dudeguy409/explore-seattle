import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightclubsComponent } from './nightclubs.component';

describe('NightclubsComponent', () => {
  let component: NightclubsComponent;
  let fixture: ComponentFixture<NightclubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightclubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightclubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
