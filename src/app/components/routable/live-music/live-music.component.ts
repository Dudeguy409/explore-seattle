import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { LIVEMUSIC } from "../../../data/live-music";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-live-music',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class LiveMusicComponent implements OnInit {
  blurbList: BlurbList = LIVEMUSIC;

  constructor() { }

  ngOnInit() {
  }

}
