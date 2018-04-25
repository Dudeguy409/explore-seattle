import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { LEAVENWORTH } from "../../../data/leavenworth";
import { Blurb } from '../../../models/blurb';

@Component({
  selector: 'app-leavenworth',
  template: `<app-blurb [blurb]="blurb"></app-blurb>`
})
export class LeavenworthComponent implements OnInit {
  blurb: Blurb = LEAVENWORTH;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }
}