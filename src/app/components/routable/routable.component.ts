import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {SubMenuTogglerService} from '../../services/sub-menu-toggler.service';

export class RoutableComponent implements OnInit {
  router: Router;
  show: boolean;
  subMenuToggleService:SubMenuTogglerService;

  constructor(private _router: Router, private submenuservice:SubMenuTogglerService) {
    this.router = _router;
    this.show = false;
    this.subMenuToggleService = submenuservice;
  }

  ngOnInit() {
    if (this.router.url.startsWith("/nightlife")) {
      this.subMenuToggleService.setNightlife(true);
    } else {
      this.subMenuToggleService.setNightlife(false);
    }

    if (this.router.url.startsWith("/outdoor_activities")) {
      this.subMenuToggleService.setNightlife(false);
    } else {
      this.subMenuToggleService.setOutdoors(false);
    }
  }

}
