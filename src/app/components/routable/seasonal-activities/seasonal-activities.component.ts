import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { SEASONAL_ACTIVITIES } from "../../../data/seasonal-activities";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-seasonal-activities',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class SeasonalActivitiesComponent implements OnInit {
  blurbList: BlurbList = SEASONAL_ACTIVITIES;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}