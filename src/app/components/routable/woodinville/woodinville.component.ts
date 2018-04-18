import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import {WOODINVILLE} from "../../../data/woodinville";
import { Blurb } from '../../../models/blurb';

@Component({
  selector: 'app-woodinville',
  template:`<app-blurb [blurb]="blurb"></app-blurb>`
})
export class WoodinvilleComponent {
  blurb:Blurb=WOODINVILLE;

  constructor(private router: Router, private subMenuToggleService:SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }
}
