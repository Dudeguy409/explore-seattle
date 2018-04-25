import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { IRISH_PUBS } from "../../../data/irish-pubs";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-irish-pubs',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class IrishPubsComponent implements OnInit {
  blurbList: BlurbList = IRISH_PUBS;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}