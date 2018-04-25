import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';
import { GAMES_AND_BARCADES } from "../../../data/games-and-barcades";
import { BlurbList } from '../../../models/blurb-list';

@Component({
  selector: 'app-games-and-barcades',
  template: `<app-blurb-list [blurbList]="blurbList"></app-blurb-list>`
})
export class GamesAndBarcadesComponent implements OnInit {
  blurbList: BlurbList = GAMES_AND_BARCADES;

  constructor(private router: Router, private subMenuToggleService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}