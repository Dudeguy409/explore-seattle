import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { NIGHTLIFE } from "../../../data/nightlife";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-nightlife',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class NightlifeComponent implements OnInit {
  blurbList: BlurbList = NIGHTLIFE;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}