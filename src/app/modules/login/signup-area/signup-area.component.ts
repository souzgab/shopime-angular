import { Role } from './../../../enum/role';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from 'src/app/shared/class/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-area',
  templateUrl: './signup-area.component.html',
  styleUrls: ['./signup-area.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SignupAreaComponent implements OnInit {

  signupForm: FormGroup
  user: User = new User()

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createForm(new User())
  }

  validate(data: string): string {
    return data.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')
  }

  createForm(user: User) {
    this.signupForm = this.formBuilder.group({
      role: Role.USER,
      email: [user.email, [Validators.required, Validators.email]],
      firstName: [user.name.concat(), [Validators.required, Validators.minLength(3)]],
      lastName: [user.name.concat(), [Validators.required, Validators.minLength(3)]],
      phone: [user.phone, Validators.required],
      document: [user.document, [Validators.required, Validators.minLength(11)]],
      password: [user.password, [Validators.required, Validators.minLength(8)]],
      name: this.user.name
    })
    this.user.name = this.signupForm.value.firstName.concat(" ", this.signupForm.value.lastName)
  }

  onSubmit() {
    this.user = this.signupForm.value
    this.user.name = this.signupForm.value.firstName.concat(" ", this.signupForm.value.lastName)
    console.table(this.user)
    this.userService.signUp(this.user).subscribe((response) => {
      console.log(response)
      this.router.navigate(['/home']);
    })
  }
}
