import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { CITY_FROM_ABOVE } from "../../../data/city-from-above";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-city-from-above',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class CityFromAboveComponent implements OnInit {
  blurbList: BlurbList = CITY_FROM_ABOVE;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}