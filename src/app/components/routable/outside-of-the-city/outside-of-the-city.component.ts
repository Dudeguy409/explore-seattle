import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { OUTSIDE_OF_THE_CITY } from '../../../data/outside-of-the-city';
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-outside-of-the-city',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class OutsideOfTheCityComponent implements OnInit {
  blurbList: BlurbList = OUTSIDE_OF_THE_CITY;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}