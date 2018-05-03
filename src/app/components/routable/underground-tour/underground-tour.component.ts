import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { UNDERGROUND_TOUR } from "../../../data/underground-tour";
import { Blurb } from '../../../models/blurb';

@Component({
  selector: 'app-underground-tour',
  template: `<app-blurb [blurb]="blurb"></app-blurb>`
})
export class UndergroundTourComponent implements OnInit {
  blurb: Blurb = UNDERGROUND_TOUR;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }
}