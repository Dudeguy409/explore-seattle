import { Component, ViewEncapsulation } from '@angular/core';

import { SubMenuTogglerService } from './services/sub-menu-toggler.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  isOutdoors: boolean;
  isNightlife: boolean;
  subMenuService: SubMenuTogglerService;
  nightlifeSubscription: Subscription;
  outdoorsSubscription: Subscription;
  falsey: boolean = false;

  constructor(private submenuservice: SubMenuTogglerService) {
    this.subMenuService = submenuservice;
    this.isNightlife = false;
    this.isOutdoors = false;
  }

  ngOnInit() {
    this.nightlifeSubscription = this.subMenuService.changeNightlife.subscribe(val => {
      console.log(val);
      this.isNightlife = val;
    });

    this.outdoorsSubscription = this.subMenuService.changeOutdoors.subscribe(val => {
      console.log(val);
      this.isOutdoors = val;
    });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.outdoorsSubscription.unsubscribe();
    this.nightlifeSubscription.unsubscribe();
  }

}
