import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { LIVE_MUSIC } from "../../../data/live-music";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-live-music',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class LiveMusicComponent implements OnInit {
  blurbList: BlurbList = LIVE_MUSIC;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }
}