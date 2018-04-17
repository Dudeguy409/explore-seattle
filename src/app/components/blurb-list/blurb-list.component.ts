import { Component, OnInit } from '@angular/core';

import{BlurbList} from "../../models/blurb-list";

@Component({
  selector: 'app-blurb-list',
  templateUrl: './blurb-list.component.html'
})
export class BlurbListComponent implements OnInit {

  constructor(blurbList: BlurbList) {
  }

  ngOnInit() {
  }

}
