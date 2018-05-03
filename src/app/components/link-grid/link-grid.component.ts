import { Component, OnInit , Input} from '@angular/core';

import{LinkGrid} from "../../models/link-grid";

@Component({
  selector: 'app-link-grid',
  templateUrl: './link-grid.component.html'
})
export class LinkGridComponent {

  @Input() linkGrid:LinkGrid;

}