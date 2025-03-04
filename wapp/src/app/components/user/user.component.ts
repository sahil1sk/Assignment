import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent{
  selectedUser: User | undefined;
}
