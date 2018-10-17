import { Component, OnInit } from '@angular/core';
import { UsersServices } from '../users.services';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private services: UsersServices) {}
  // @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();

  onSetToInactive(id: number) {
    this.services.setToInactive(id);
    // this.userSetToInactive.emit(id);
  }

  ngOnInit() {
    this.users = this.services.activeUsers;
  }
}
