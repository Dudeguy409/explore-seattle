import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { GEORGETOWN } from "../../../data/georgetown";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-georgetown',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class GeorgetownComponent implements OnInit {
  blurbList: BlurbList = GEORGETOWN;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }
}