import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RoutableComponent } from '../routable/routable.component';
import { SubMenuTogglerService } from '../../services/sub-menu-toggler.service';

@Component({
  selector: 'app-german-beer',
  templateUrl: './german-beer.component.html'
})
export class GermanBeerComponent extends RoutableComponent {

  constructor(private _routerB: Router, private _submenuserviceB: SubMenuTogglerService) {
    super(_routerB, _submenuserviceB);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}