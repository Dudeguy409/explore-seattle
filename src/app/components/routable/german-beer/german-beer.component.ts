import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { GERMAN_BEER } from "../../../data/german-beer";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-german-beer',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class GermanBeerComponent implements OnInit {
  blurbList: BlurbList = GERMAN_BEER;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}