import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { OUTSIDE_OF_THE_CITY } from '../../../data/outside-of-the-city';
import { LinkGrid } from '../../../models/link-grid';

@Component({
  selector: 'app-outside-of-the-city',
  template: `<app-link-grid [linkGrid]="linkGrid"></app-link-grid>`
})
export class OutsideOfTheCityComponent implements OnInit {
  linkGrid: LinkGrid = OUTSIDE_OF_THE_CITY;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}