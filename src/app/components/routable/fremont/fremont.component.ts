import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { FREMONT } from "../../../data/fremont";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-fremont',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class FremontComponent implements OnInit {
  blurbList: BlurbList = FREMONT;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }
}