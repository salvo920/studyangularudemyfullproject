import { Component } from '@angular/core';

@Component({
  // selector: '[app-server]', // selettore tramite attributo
  // selector: '.app-server', // selettore tramite classe 
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor(): string {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
  getServerStatus(): string {
    return this.serverStatus
  }

  getClass(): boolean {
    return this.serverStatus === 'online';
  }
}
