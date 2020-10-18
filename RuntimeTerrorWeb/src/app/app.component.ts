import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NotificationService } from '../services/notification.service';
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
  isSessionOn = false;
  isRegistration = false;
  @ViewChild('logout')
  userName: string;
  items: MenuItem[];

  constructor(
    private notificationService: NotificationService,
    private cdRef: ChangeDetectorRef
  ) {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.userName = localStorage.getItem('token');
      this.isSessionOn = true;
    }
  }

  ngOnInit() {
    this.isAccomodation = true;
    this.notificationService.loginUserNotification.subscribe((loggedInUser) => {
      this.userName = loggedInUser;
    });

    // this.items = [
    //   { label: 'Logout', icon: 'pi pi-fw pi-power-off'}
    // ];
  }

  ngAfterViewChecked() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.userName = localStorage.getItem('token');
      this.isSessionOn = true;
    }
    this.cdRef.detectChanges();
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

  onLogoutConfirmation(): any {
    this.userName = '';
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.setItem('token', null);
    this.isSessionOn = false;
  }
}
