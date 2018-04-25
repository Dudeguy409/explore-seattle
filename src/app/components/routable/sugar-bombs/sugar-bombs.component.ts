import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { SUGAR_BOMBS } from "../../../data/sugar-bombs";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-sugar-bombs',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class SugarBombsComponent implements OnInit {
  blurbList: BlurbList = SUGAR_BOMBS;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }
}
