import { Component, OnInit } from '@angular/core';
import { UsersServices } from '../users.services';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  // @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();
  users: string[];
  constructor(private services: UsersServices) {}
  onSetToActive(id: number) {
    this.services.setToActive(id);
    // this.userSetToActive.emit(id);
  }

  ngOnInit() {
    this.users = this.services.inactiveUsers;
  }

}
