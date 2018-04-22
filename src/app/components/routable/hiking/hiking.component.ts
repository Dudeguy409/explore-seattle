import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { HIKING } from "../../../data/hiking";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-hiking',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class HikingComponent {
  blurbList: BlurbList = HIKING;

  constructor(private router: Router, private subMenuToggleService:SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}