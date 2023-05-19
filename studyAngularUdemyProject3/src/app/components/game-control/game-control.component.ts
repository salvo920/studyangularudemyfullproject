import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  emitNumberInterval: NodeJS.Timer
  lastNumber: number = 0

  constructor() {
  }

  ngOnInit(): void {
  }

  EmitNumber() {
    this.emitNumberInterval = setInterval(() => {

      this.intervalFired.emit(this.lastNumber);
      this.lastNumber++;
    }, 1000)
  }

  // segui la notazione : verbo + cosa è 
  StopEmitNumber() {
    clearInterval(this.emitNumberInterval);
  }

}
