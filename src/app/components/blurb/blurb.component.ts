import { Component, Input} from '@angular/core';

import { Blurb } from "../../models/blurb";

@Component({
  selector: 'app-blurb',
  templateUrl: './blurb.component.html'
})
export class BlurbComponent {

  @Input() blurb:Blurb;

}


