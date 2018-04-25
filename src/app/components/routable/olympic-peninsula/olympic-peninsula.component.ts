import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { OLYMPIC_PENINSULA } from "../../../data/olympic-peninsula";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-olympic-peninsula',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class OlympicPeninsulaComponent implements OnInit {
  blurbList: BlurbList = OLYMPIC_PENINSULA;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}