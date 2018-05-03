import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalDistrictComponent } from './international-district.component';

describe('InternationalDistrictComponent', () => {
  let component: InternationalDistrictComponent;
  let fixture: ComponentFixture<InternationalDistrictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalDistrictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
