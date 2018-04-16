import { TestBed, inject } from '@angular/core/testing';

import { SubMenuTogglerService } from './sub-menu-toggler.service';

describe('SubMenuTogglerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubMenuTogglerService]
    });
  });

  it('should be created', inject([SubMenuTogglerService], (service: SubMenuTogglerService) => {
    expect(service).toBeTruthy();
  }));
});
