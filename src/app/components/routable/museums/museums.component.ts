import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { MUSEUMS } from "../../../data/museums";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-museums',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class MuseumsComponent implements OnInit {
  blurbList: BlurbList = MUSEUMS;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}