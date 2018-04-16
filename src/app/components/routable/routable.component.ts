import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class RoutableComponent implements OnInit {
  router: Router;

  constructor(private _router: Router) {
    this.router = _router;
  }

  ngOnInit() {
    if(this.router.url.startsWith("/nightlife")){

    }else{

    }

    if(this.router.url.startsWith("/outdoor_activities")){

    }else{
      
    }
  }

}
