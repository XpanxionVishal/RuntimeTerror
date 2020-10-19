import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../domain/IUser';
import { AuthService } from '../../services/auth.service';
import { EncrDecrService } from '../../services/encr-decr.service';
import { AppService } from '../app.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: IUser;
  loginForm: FormGroup;
  message: string;
  returnUrl: string;
  submitted: boolean;
  isLoggedIn = false;
  isNewUser = false;
  isRegistered = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public authService: AuthService,
    private http: HttpClient,
    private EncrDecr: EncrDecrService,
    private appService: AppService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '/dashboard';
    this.authService.logout();
    this.notificationService.registerUserNotification.subscribe((isRegister) => {
      this.isRegistered = isRegister;
    });
  }

  get f() { return this.loginForm.controls; }

  login(formData) {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    else {
      formData.password = this.EncrDecr.set('123456$#@$^@1ERF', formData.password);
      this.http.post('https://localhost:5001/api/Login/CheckIsUserLoggedIn',
        formData).subscribe(event => {
          if (event) {
            this.appService.getUserDetails(formData.email).subscribe(userDetails => {
              console.log('Login successful');
              localStorage.setItem('isLoggedIn', 'true');
              localStorage.setItem('token', userDetails.name);
              localStorage.setItem('userId', userDetails.userId);
              this.isLoggedIn = true;
              this.message = '';
              this.notificationService.notifyLoggedInUserExists(userDetails.name);
            });
          }
          else {
            this.message = 'Please check your email and password';
          }
        });
    }
  }
}
