import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { CITY_SIGHTS } from "../../../data/city-sights";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-city-sights',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class CitySightsComponent implements OnInit {
  blurbList: BlurbList = CITY_SIGHTS;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}