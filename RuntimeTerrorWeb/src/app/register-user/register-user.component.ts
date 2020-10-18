import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public authService: AuthService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      isBuyer: ['', Validators.required],
      isSeller: ['', Validators.required],
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
      this.http.post('https://localhost:5001/api/Login/RegisterUser',
        formData).subscribe(event => {
          if (event) {
            console.log('Login successful');
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('token', this.f.email.value);
          }
          else {
            this.message = 'Registration Failed';
          }
        });
    }
  }
}