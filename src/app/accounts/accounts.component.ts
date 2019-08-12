import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccountsComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().pipe().subscribe(response  => {
            let users = response.content;
            if( !(undefined === users || users === null) ){ 
                users.forEach(function(user){
                    let picture = Math.floor((Math.random() * 4) + 1);
                    user.profile = 'assets/images/faces-clipart/pic-' + picture + '.png';
                })
            }
            this.users = users;
        });
  }

}
