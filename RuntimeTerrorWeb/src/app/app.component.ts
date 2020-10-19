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
  display = false;

  constructor(
    private notificationService: NotificationService,
    private cdRef: ChangeDetectorRef
  ) {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.userName = localStorage.getItem('token');
      this.isSessionOn = true;
    }
  }

  ngOnInit(): void {
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
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.isPostAd = true;
      this.isAccomodation = false;
      this.isLogin = false;
      this.isRegistration = false;
    } else {
      this.display = true;
    }
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

  onLogoutConfirmation() {
    this.userName = '';
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.setItem('token', null);
    localStorage.setItem('userId', null);
    this.isSessionOn = false;
  }

  onPopupOKClick() {
    this.display = false;
  }
}
