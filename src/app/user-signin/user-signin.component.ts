import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserSigninService } from '../user-signin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css'],
})
export class UserSigninComponent {
  myForm: FormGroup | any = {};

  constructor(
    private formBuilder: FormBuilder,
    private userSigninService: UserSigninService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  respStatus: number = 0;
  respMssg: string | null = '';
  submitForm() {
    console.log(this.myForm.value, '______________');
    console.log(this.myForm.valid);

    if (this.myForm.valid) {
      this.userSigninService
        .loginUser({
          customer_email: this.myForm.value.email,
          customer_password: this.myForm.value.password,
        })
        .subscribe((data) => {
          console.log('1234 ', data.status);
          if (data.status == 'success') {
            console.log('Yaha pe hai');

            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('user_id', data.user_id);
            localStorage.setItem('first_name', data.first_name);
            localStorage.setItem('profile_pic', data.profile_pic);
            this.router.navigate(['/']);
          } else {
            console.log('Waha pe hai', data.msg);

            if (data.msg === 'wrong_email_or_password') {
              this.respStatus = 1;
            }
          }
          setTimeout(() => (this.respStatus = 0), 4000);
        });
    } else {
      // Display error messages or take appropriate action
    }
  }
}
