import { UserService } from 'src/app/services/user.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from 'src/app/class/user';
import { Credentials } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login-area',
  templateUrl: './login-area.component.html',
  styleUrls: ['./login-area.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginAreaComponent implements OnInit {

  formCredentials: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.createForm({email: new User().email, password: new User().password})
  }

  createForm(credentials: Credentials) {
    this.formCredentials = this.formBuilder.group({
      email: [credentials.email, [Validators.required, Validators.email]],
      password: [credentials.password, [Validators.required, Validators.minLength(8)]]
    })
  }

  onSubmit() {
    console.log(this.formCredentials.value)
    this.userService.signIn(this.formCredentials.value).subscribe((response) => {
      console.log(response)
    })
  }
}
