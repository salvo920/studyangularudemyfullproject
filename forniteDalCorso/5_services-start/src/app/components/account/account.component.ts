import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../../services/logging/logging.service';
import { AccountsService } from '../../services/accounts/accounts.service';
import { UserService } from '../../services/user/user.service';
import { CounterService } from '../../services/counter/counter.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  // iniettiamo il service qui in modo da non dover instanziale la classe manualmente 
  // lo fara angular per noi 
  constructor(private loggingSerice: LoggingService, private accoutService: AccountsService, private userService: UserService, private counterService: CounterService) { }

  onSetTo(status: string) {
    // console.log('A server status changed, new status: ' + status);
    this.accoutService.updateAccount(this.id, status)
    // this.loggingSerice.logStautusChange(status);
    // this.accoutService.updateStatus.emit(status);

    console.log(status)

    if (status == 'Active') {

      this.userService.setToActive(this.id);
    } else if (status == "Inactive") {
      this.userService.setToInactive(this.id);
    }
  }
}
