import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { CITY_PARKS } from "../../../data/city-parks";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-city-parks',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class CityParksComponent implements OnInit {
  blurbList: BlurbList = CITY_PARKS;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}