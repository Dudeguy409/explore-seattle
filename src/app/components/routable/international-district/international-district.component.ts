import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { CHINATOWN_INTERNATIONAL_DISTRICT } from "../../../data/chinatown-international-district";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-chinatown-international-district',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class InternationalDistrictComponent implements OnInit {
  blurbList: BlurbList = CHINATOWN_INTERNATIONAL_DISTRICT;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }
}