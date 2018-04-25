import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { BALLROOM_DANCING } from "../../../data/ballroom-dancing";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-ballroom-dancing',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class BallroomDancingComponent implements OnInit {
  blurbList: BlurbList = BALLROOM_DANCING;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}