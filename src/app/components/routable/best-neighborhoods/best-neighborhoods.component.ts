import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { BEST_NEIGHBORHOODS } from "../../../data/best-neighborhoods";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-best-neighborhoods',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class BestNeighborhoodsComponent implements OnInit {
  blurbList: BlurbList = BEST_NEIGHBORHOODS;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}