import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent {

  users: string[];
  constructor(private userService: UserService) { }

  onSetInactive(id: number) {
    this.userService.setToInactive(id)
  }

  ngOnInit(): void {
    this.users = this.userService.getActiveUser();
  }

}
