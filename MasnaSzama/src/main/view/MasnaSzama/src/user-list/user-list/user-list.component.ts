import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../../service/user-service.service";
import {User} from "../../model/user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserServiceService) {

  }

  ngOnInit(): void {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

}
