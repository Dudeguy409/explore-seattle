import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { FIRST_TRIP } from "../../../data/first-trip";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-first-trip',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class FirstTripComponent implements OnInit {
  blurbList: BlurbList = FIRST_TRIP;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}