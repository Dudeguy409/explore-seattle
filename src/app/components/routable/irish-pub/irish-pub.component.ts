import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SubMenuTogglerService } from '../../../services/sub-menu-toggler.service';

@Component({
  selector: 'app-irish-pub',
  templateUrl: './irish-pub.component.html'
})
export class IrishPubComponent {

  constructor(private router: Router, private subMenuToggleService:SubMenuTogglerService) {
  }

  ngOnInit() {
    this.subMenuToggleService.setRoute(this.router.url);
  }

}
