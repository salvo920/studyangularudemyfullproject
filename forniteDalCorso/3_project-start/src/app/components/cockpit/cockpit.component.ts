import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // possiamo accede all'emeneto html anche usando il tag viewChild
  @ViewChild('serverContentInput') serverContent: ElementRef;
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }



  onAddServer(serverName: HTMLInputElement) {
    console.log("serverName: ", serverName, "value:", serverName.value)
    this.serverCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContent.nativeElement.value,
    });
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContent.nativeElement.value,
    });
  }


}
