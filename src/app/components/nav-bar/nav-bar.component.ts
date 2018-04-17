import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SubMenuTogglerService } from '../../services/sub-menu-toggler.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent implements OnInit {
  isOutdoors: boolean = false;
  isNightlife: boolean = false;
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

      if (url.startsWith("/outdoor_activities")) {
        this.isOutdoors = true;
      } else {
        this.isOutdoors = false;
      }
    });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.routeSubscription.unsubscribe();
  }
}