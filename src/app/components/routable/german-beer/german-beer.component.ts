import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { GERMANBEER } from "../../../data/german-beer";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-german-beer',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class GermanBeerComponent {
  blurbList: BlurbList = GERMANBEER;

  constructor(private router: Router, private subMenuToggleService:SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}