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

  ngOnInit() {
    this.isAccomodation = true;
  }
  accomodation() {
    this.isAccomodation = true;
    this.isPostAd = false;

  }

  postAd() {
    this.isPostAd = true;
    this.isAccomodation = false;
  }
}
