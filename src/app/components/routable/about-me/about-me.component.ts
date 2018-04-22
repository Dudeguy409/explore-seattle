import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { ABOUTME } from "../../../data/about-me";
import { Blurb } from '../../../models/blurb';

@Component({
  selector: 'app-about-me',
  template: `<app-blurb [blurb]="blurb"></app-blurb>`
})
export class AboutMeComponent {
  blurb: Blurb = ABOUTME;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}