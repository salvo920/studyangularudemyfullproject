import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../../services/logging/logging.service';
import { AccountsService } from '../../services/accounts/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  constructor(private loggingSerice: LoggingService, private accountService: AccountsService) {
    this.accountService.updateStatus.subscribe(
      (status: string) => alert('New Status:' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {

    // console.log('A server status changed, new status: ' + accountStatus);
    this.loggingSerice.logStautusChange(accountStatus);
    this.accountService.addAccount(accountName, accountStatus);
  }
}
