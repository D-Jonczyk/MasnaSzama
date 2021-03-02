import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../../service/user-service.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserServiceService) {
    this.user = new User();
  }

  onSubmit() {
    // @ts-ignore
    this.userService.save(this.user).subscribe(r => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
