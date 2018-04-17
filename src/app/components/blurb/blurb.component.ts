import { Component, OnInit } from '@angular/core';

import { Blurb } from "../../models/blurb";

@Component({
  selector: 'app-blurb',
  templateUrl: './blurb.component.html'
})
export class BlurbComponent implements OnInit {

  constructor(blurb: Blurb) {
  }

  ngOnInit() {
  }

}


