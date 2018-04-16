import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RoutableComponent } from '../routable/routable.component';
import { SubMenuTogglerService } from '../../services/sub-menu-toggler.service';

@Component({
  selector: 'app-leavenworth',
  templateUrl: './leavenworth.component.html'
})
export class LeavenworthComponent extends RoutableComponent {

  constructor(private _routerB: Router, private _submenuserviceB: SubMenuTogglerService) {
    super(_routerB, _submenuserviceB);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
