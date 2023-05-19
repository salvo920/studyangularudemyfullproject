import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'TestServer', content: 'Just a test!!' }];
  evenNumbers: number[] = []
  oddNumbers: number[] = []

  onServerCreated(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintCreated(bluePrintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!!!'
  }

  onDestroyFirst() {
    //rimuove il primo elemento 
    this.serverElements.splice(0, 1);
  }

  onIntervalFired(firedNumber: number) {
    console.log("number:", firedNumber);
    if (firedNumber % 2 === 0) this.evenNumbers.push(firedNumber)
    else this.oddNumbers.push(firedNumber)
  }
}
