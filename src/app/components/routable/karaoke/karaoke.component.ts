import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { KARAOKE } from "../../../data/karaoke";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-karaoke',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class KaraokeComponent implements OnInit {
  blurbList: BlurbList = KARAOKE;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}