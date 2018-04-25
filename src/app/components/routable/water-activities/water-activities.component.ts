import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { WATER_ACTIVITIES } from "../../../data/water-activities";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-water-activities',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class WaterActivitiesComponent implements OnInit {
  blurbList: BlurbList = WATER_ACTIVITIES;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }
}