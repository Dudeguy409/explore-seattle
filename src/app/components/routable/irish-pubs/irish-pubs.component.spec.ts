import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrishPubsComponent } from './irish-pubs.component';

describe('IrishPubsComponent', () => {
  let component: IrishPubsComponent;
  let fixture: ComponentFixture<IrishPubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrishPubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrishPubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
