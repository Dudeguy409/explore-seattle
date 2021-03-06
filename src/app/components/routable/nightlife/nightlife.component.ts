import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { NIGHTLIFE } from "../../../data/nightlife";
import { LinkGrid } from '../../../models/link-grid';

@Component({
  selector: 'app-nightlife',
  template: `<app-link-grid [linkGrid]="linkGrid"></app-link-grid>`
})
export class NightlifeComponent implements OnInit {
  linkGrid: LinkGrid = NIGHTLIFE;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}