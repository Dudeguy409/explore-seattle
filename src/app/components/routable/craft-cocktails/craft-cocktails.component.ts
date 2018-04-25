import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { CRAFT_COCKTAILS } from "../../../data/craft-cocktails";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-craft-cocktails',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class CraftCocktailsComponent implements OnInit {
  blurbList: BlurbList = CRAFT_COCKTAILS;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}