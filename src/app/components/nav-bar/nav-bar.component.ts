import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SubMenuTogglerService } from '../../services/sub-menu-toggler.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent implements OnInit {
  isOutsideCity: boolean = false;
  isNightlife: boolean = false;
  isCitySights: boolean = false;
  routeSubscription: Subscription;

  constructor(private subMenuService: SubMenuTogglerService) {
  }

  ngOnInit() {
    this.routeSubscription = this.subMenuService.changeRoute.subscribe(url => {
      if (url.startsWith("/nightlife")) {
        this.isNightlife = true;
      } else {
        this.isNightlife = false;
      }

      if (url.startsWith("/outside_of_the_city")) {
        this.isOutsideCity = true;
      } else {
        this.isOutsideCity = false;
      }

      if (url.startsWith("/city_sights")) {
        this.isCitySights = true;
      } else {
        this.isCitySights = false;
      }
    });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.routeSubscription.unsubscribe();
  }
}