import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { UserSignupService } from '../user-signup.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css'],
})
export class UserSignupComponent {
  myForm: FormGroup | any = {};

  constructor(
    private formBuilder: FormBuilder,
    private userSignupService: UserSignupService
  ) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      imageUrl: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  respStatus = 0;
  respMssg = '';
  submitForm() {
    console.log(this.myForm.value, '______________');
    console.log(this.myForm.valid);

    if (this.myForm.valid) {
      this.userSignupService
        .registerUser({
          fname: this.myForm.value.firstName,
          lname: this.myForm.value.lastName,
          customer_email: this.myForm.value.email,
          customer_password: this.myForm.value.password,
          profile_pic: this.myForm.value.imageUrl,
        })
        .subscribe((data) => {
          console.log('1234 ', data.status);
          if (data.status == 'success') {
            this.respStatus = 1;
            this.respMssg = '🎊 User Registered Successfully';
            
          } else {
            this.respStatus = 2;
            if (data.msg === 'email_duplicacy') {
              this.respMssg = 'User with given email already exits';
            }
          }
          setTimeout(() => this.respStatus=0, 4000);
        });
    } else {
      location.reload();
    }
  }

  // passwordMatchValidator(control: AbstractControl) {
  //   const password = control.get('password').value;
  //   const confirmPassword = control.get('confirmPassword').value;

  //   if (password !== confirmPassword) {
  //     control.get('confirmPassword').setErrors({ passwordMismatch: true });
  //   } else {
  //     control.get('confirmPassword').setErrors(null);
  //   }

  //   control.get('confirmPassword').updateValueAndValidity();
  // }
}
