import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { SKIING } from "../../../data/skiing";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-skiing',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class SkiingComponent {
  blurbList: BlurbList = SKIING;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }
}