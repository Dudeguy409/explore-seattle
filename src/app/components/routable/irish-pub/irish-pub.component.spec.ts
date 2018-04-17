import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrishPubComponent } from './irish-pub.component';

describe('IrishPubComponent', () => {
  let component: IrishPubComponent;
  let fixture: ComponentFixture<IrishPubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrishPubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrishPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
