import { Component } from '@angular/core';
// import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Safe Home';
  isPostAd = false;
  isAccomodation = false;
  isLogin = false;
  isRegistration = false;

  ngOnInit() {
    this.isAccomodation = true;
  }
  accomodation() {
    this.isAccomodation = true;
    this.isPostAd = false;
    this.isLogin = false;
    this.isRegistration = false;
  }

  postAd() {
    this.isPostAd = true;
    this.isAccomodation = false;
    this.isLogin = false;
    this.isRegistration = false;
  }

  login() {
    this.isLogin = true;
    this.isPostAd = false;
    this.isAccomodation = false;
    this.isRegistration = false;
  }

  registration() {
    this.isRegistration = true;
    this.isLogin = false;
    this.isPostAd = false;
    this.isAccomodation = false;
  }
}
