import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  user: User

  constructor(
    private userService: UserService,
  ) { 
    this.userService.getUser().subscribe((data) => this.user = data)
    console.log(this.user)
  }

  ngOnInit(): void {
  }

}
