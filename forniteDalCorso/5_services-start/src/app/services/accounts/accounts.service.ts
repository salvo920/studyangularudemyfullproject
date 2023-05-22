import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  @Output() updateStatus = new EventEmitter<string>();
  accounts: { name: string, status: string }[] = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor() { }

  addAccount(name: string, status: string) {
    const newAccount = { name: name, status: status };
    this.accounts.push(newAccount);
  }

  updateAccount(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
  }

  getAccount(): { name: string, status: string }[] {
    return this.accounts;
  }

}
