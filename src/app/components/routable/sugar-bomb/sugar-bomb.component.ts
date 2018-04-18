import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { SUGARBOMBS } from "../../../data/sugar-bombs";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-sugar-bomb',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class SugarBombComponent {
  blurbList: BlurbList = SUGARBOMBS;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }
}
