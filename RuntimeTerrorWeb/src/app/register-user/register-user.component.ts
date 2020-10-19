import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { EncrDecrService } from '../../services/encr-decr.service'
import { NotificationService } from 'src/services/notification.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  registrationForm: FormGroup;
  returnUrl: string;
  submitted: boolean;
  message: string;
  isRegistered = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public authService: AuthService,
    private http: HttpClient,
    private EncrDecr: EncrDecrService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      userId: [0]
    });
    this.returnUrl = '/dashboard';
  }

  get f() { return this.registrationForm.controls; }

  registerUser(formData) {
    if (this.registrationForm.invalid) {
      return;
    }
    else {
      formData.password = this.EncrDecr.set('123456$#@$^@1ERF', formData.password);
      this.http.post('https://localhost:5001/api/Login/RegisterUser',
        formData).subscribe(event => {
          if (event) {
            console.log('Login successful');
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('token', this.f.email.value);
            this.isRegistered = true;
            this.notificationService.notifyIfUserIsRegistered(true);
          }
          else {
            this.message = 'Registration Failed';
          }
        });
    }
  }
}