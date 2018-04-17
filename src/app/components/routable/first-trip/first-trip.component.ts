import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';

@Component({
  selector: 'app-first-trip',
  templateUrl: './first-trip.component.html'
})
export class FirstTripComponent {

  constructor(private router: Router, private subMenuToggleService:SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}