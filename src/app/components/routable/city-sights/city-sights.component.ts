import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { CITY_SIGHTS } from "../../../data/city-sights";
import { LinkGrid } from '../../../models/link-grid';

@Component({
  selector: 'app-city-sights',
  template: `<app-link-grid [linkGrid]="linkGrid"></app-link-grid>`
})
export class CitySightsComponent implements OnInit {
  linkGrid: LinkGrid = CITY_SIGHTS;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}