import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { CRAFT_BREWERIES } from "../../../data/craft-beers";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-craft-breweries',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class CraftBreweriesComponent implements OnInit {
  blurbList: BlurbList = CRAFT_BREWERIES;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}