import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { PAGE_NOT_FOUND } from "../../../data/page-not-found";
import { Blurb } from '../../../models/blurb';

@Component({
  selector: 'app-page-not-found',
  template: `<app-blurb [blurb]="blurb"></app-blurb>`
})
export class PageNotFoundComponent implements OnInit {
  blurb: Blurb = PAGE_NOT_FOUND;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}