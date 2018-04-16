import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SubMenuTogglerService } from '../../services/sub-menu-toggler.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent implements OnInit {
  isOutdoors: boolean;
  isNightlife: boolean;
  subMenuService: SubMenuTogglerService;
  nightlifeSubscription: Subscription;
  outdoorsSubscription: Subscription;

  constructor(private submenuservice: SubMenuTogglerService) {
    this.subMenuService = submenuservice;
    this.isNightlife = false;
    this.isOutdoors = false;
  }

  ngOnInit() {
    this.nightlifeSubscription = this.subMenuService.changeNightlife.subscribe(val => {
      this.isNightlife = val;
    });

    this.outdoorsSubscription = this.subMenuService.changeOutdoors.subscribe(val => {
      this.isOutdoors = val;
    });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.outdoorsSubscription.unsubscribe();
    this.nightlifeSubscription.unsubscribe();
  }
}
