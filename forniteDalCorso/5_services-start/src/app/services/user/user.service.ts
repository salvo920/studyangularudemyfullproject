import { Injectable } from '@angular/core';
import { AccountsService } from '../accounts/accounts.service';
import { CounterService } from '../counter/counter.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUser = ['Max', 'Anna'];
  inactiveUser = ['Chris', 'Manu'];
  constructor(private counterService: CounterService) {
  }

  setToActive(id: number) {
    this.activeUser.push(this.inactiveUser[id]);
    this.inactiveUser.splice(id, 1);
    this.counterService.IncreasecounterActiveToInactive();

  }

  setToInactive(id: number) {
    this.inactiveUser.push(this.activeUser[id]);
    this.activeUser.splice(id, 1);
    this.counterService.IncreaseCounterInactiveToActive();

  }

  getActiveUser() {
    return this.activeUser;
  }
  getInactiveUser() {
    return this.inactiveUser;
  }
}
