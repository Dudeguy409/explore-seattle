import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { NIGHTCLUBS } from "../../../data/nightclubs";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-nightclubs',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class NightclubsComponent {
  blurbList: BlurbList = NIGHTCLUBS;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}