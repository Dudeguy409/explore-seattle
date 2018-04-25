import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { TRANSPORTATION } from "../../../data/transportation";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-transportation',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class TransportationComponent implements OnInit {
  blurbList: BlurbList = TRANSPORTATION;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }
}