import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { CASCADES } from "../../../data/cascades";
import { Blurb } from '../../../models/blurb';

@Component({
  selector: 'app-cascades',
  template: `<app-blurb [blurb]="blurb"></app-blurb>`
})
export class CascadesComponent implements OnInit {
  blurb: Blurb = CASCADES;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}