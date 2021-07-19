import { Router } from '@angular/router';
import { PlatformDetectorService } from './../../../services/platform.service';
import { UserService } from 'src/app/services/user.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from 'src/app/class/user';
import { Credentials } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login-area',
  templateUrl: './login-area.component.html',
  styleUrls: ['./login-area.component.scss']
})
export class LoginAreaComponent implements OnInit, AfterViewInit {

  formCredentials: FormGroup;

  @ViewChild('em') emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private platformDetectorService: PlatformDetectorService,
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createForm({email: new User().email, password: new User().password})
    this.platformDetectorService.isPlatformBrowser()  
  }

  ngAfterViewInit(): void {
    this.emailInput.nativeElement.focus();    
    this.cdr.detectChanges();
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
      this.router.navigate(['core'])
    },
    err => {
      window.alert('erro')
      this.emailInput.nativeElement.focus(); 
    })
  }
}
