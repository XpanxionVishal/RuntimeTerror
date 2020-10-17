import { Component } from '@angular/core';
// import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RuntimeTerrorWeb';
  isPostAd = false;
  isAccomodation = false;
  isLogin = false;

  ngOnInit() {
    this.isAccomodation = true;
  }
  accomodation() {
    this.isAccomodation = true;
    this.isPostAd = false;
    this.isLogin = false;
  }

  postAd() {
    this.isPostAd = true;
    this.isAccomodation = false;
    this.isLogin = false;
  }

  login() {
    this.isLogin = true;
    this.isPostAd = false;
    this.isAccomodation = false;
  }
}
