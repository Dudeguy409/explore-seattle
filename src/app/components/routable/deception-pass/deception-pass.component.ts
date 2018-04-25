import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { DECEPTION_PASS } from "../../../data/deception-pass";
import { Blurb } from '../../../models/blurb';

@Component({
  selector: 'app-deception-pass',
  template: `<app-blurb [blurb]="blurb"></app-blurb>`
})
export class DeceptionPassComponent implements OnInit {
  blurb: Blurb = DECEPTION_PASS;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}