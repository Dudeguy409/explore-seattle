import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { RESTAURANTS } from "../../../data/restaurants";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-restaurants',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class RestaurantsComponent implements OnInit {
  blurbList: BlurbList = RESTAURANTS;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}