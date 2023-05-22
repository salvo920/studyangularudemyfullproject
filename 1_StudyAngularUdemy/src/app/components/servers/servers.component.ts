import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No Server was created!!"
  serverName: string = "TestServer"
  username: string = "TestUsername"
  serverCreated: boolean = false
  serversName: string[] = ['testServer', 'testServer 2']
  SecretPassword: string = 'tuna'
  displayDetail = false
  displayDetailClick: Array<Date> = []

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
  }

  onCreateServer(): void {
    this.serverCreated = true
    this.serversName.push(this.serverName);
    this.serverCreationStatus = "Server was created!! Server name is " + this.serverName
  }

  onUpdateServerName(event: Event): void {
    this.serverName = (<HTMLInputElement>event.target).value
  }

  onUpdateUsername(event: Event) {
    this.username = (<HTMLInputElement>event.target).value
  }

  isEmpty(variable: any): boolean {
    // guard codiction 
    if ((String(variable)).trim().length <= 0) {
      return false
    }
    return true
  }

  resetUsername(): string {
    return this.username = "";
  }

  displayDetails(): void {
    this.displayDetail = !this.displayDetail
    this.displayDetailClick.push(new Date());
  }

  getColorBack(index: number): string {
    return index >= 5 ? "blue" : "transparent";
  }

  getTextColor(index: number): boolean {
    return index >= 5
  }

}
