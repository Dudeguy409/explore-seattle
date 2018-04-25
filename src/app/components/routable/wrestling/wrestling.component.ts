import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { WRESTLING } from "../../../data/wrestling";
import { Blurb } from '../../../models/blurb';

@Component({
  selector: 'app-wrestling',
  template: `<app-blurb [blurb]="blurb"></app-blurb>`
})
export class WrestlingComponent implements OnInit {
  blurb: Blurb = WRESTLING;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }
}