import { EventEmitter, Injectable } from '@angular/core';
import { InactiveActiveCounter } from './counter.services';

@Injectable()
export class UsersServices {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  userSetToActive = new EventEmitter<number>();
  userSetToInactive = new EventEmitter<number>();
  constructor(private counterService: InactiveActiveCounter) {}
  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.onInActiveToActiveCounter();
  }
  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.onActiveToInActiveCounter();
  }

  updateUserStatus() {
    console.log('new update!');
  }

}
