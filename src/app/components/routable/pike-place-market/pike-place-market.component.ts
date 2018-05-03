import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { PIKE_PLACE_MARKET } from "../../../data/pike-place-market";
import { Blurb } from '../../../models/blurb';

@Component({
  selector: 'app-pike-place-market',
  template: `<app-blurb [blurb]="blurb"></app-blurb>`
})
export class PikePlaceMarketComponent implements OnInit {
  blurb: Blurb = PIKE_PLACE_MARKET;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }
}