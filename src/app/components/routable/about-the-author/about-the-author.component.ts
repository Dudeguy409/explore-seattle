import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { ABOUT_THE_AUTHOR } from "../../../data/about-the-author";
import { Blurb } from '../../../models/blurb';

@Component({
  selector: 'app-about-the-author',
  template: `<app-blurb [blurb]="blurb"></app-blurb>`
})
export class AboutTheAuthorComponent implements OnInit {
  blurb: Blurb = ABOUT_THE_AUTHOR;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}