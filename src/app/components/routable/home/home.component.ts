import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { HOME } from "../../../data/home";
import { LinkGrid } from '../../../models/link-grid';

@Component({
  selector: 'app-home',
  template: `<app-link-grid [linkGrid]="linkGrid"></app-link-grid>`
})
export class HomeComponent implements OnInit {
  linkGrid: LinkGrid = HOME;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}