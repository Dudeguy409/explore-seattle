import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { SOUVENIR_IDEAS } from "../../../data/souvenir-ideas";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-souvenir-ideas',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class SouvenirIdeasComponent implements OnInit {
  blurbList: BlurbList = SOUVENIR_IDEAS;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }
}