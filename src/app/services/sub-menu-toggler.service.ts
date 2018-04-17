import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SubMenuTogglerService {
  changeRoute: EventEmitter<string> = new EventEmitter();

  setRoute(url: string) {
    this.changeRoute.emit(url);
  }

}
