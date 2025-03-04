import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  @Output() userSelected = new EventEmitter<User>();
  users: User[] = [];
  loading: boolean = true;

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.service.getUser().subscribe(data => {
      if(data.length > 0) {
        this.users = data
        this.selectUser(this.users[0]);
      }
      this.loading = false;
    });
  }

  selectUser(user: User) {
    this.userSelected.emit(user);
  }
}
