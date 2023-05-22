import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent {

  users: string[];
  constructor(private userService: UserService) { }

  onSetActive(id: number) {
    this.userService.setToActive(id)
  }

  ngOnInit(): void {
    this.users = this.userService.getInactiveUser();
  }


}
