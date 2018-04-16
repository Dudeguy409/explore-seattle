import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SubMenuTogglerService {
  changeNightlife: EventEmitter<boolean> = new EventEmitter();
  changeOutdoors: EventEmitter<boolean> = new EventEmitter();

  setNightlife(val: boolean) {
    this.changeNightlife.emit(val);
  }

  setOutdoors(val: boolean) {
    this.changeOutdoors.emit(val);
  }
}
