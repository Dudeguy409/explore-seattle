import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { SKIING_AND_SNOWBOARDING } from "../../../data/skiing-and-snowboarding";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-skiing-and-snowboarding',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class SkiingAndSnowboardingComponent implements OnInit {
  blurbList: BlurbList = SKIING_AND_SNOWBOARDING;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }
}