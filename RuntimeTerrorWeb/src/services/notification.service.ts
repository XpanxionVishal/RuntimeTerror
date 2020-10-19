import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  loginUserNotification: Subject<string> = new Subject<string>();
  registerUserNotification: Subject<boolean> = new Subject<boolean>();

  constructor(
  ) {
  }

  notifyLoggedInUserExists(loggedInUser: string): void {
    this.loginUserNotification.next(localStorage.getItem('token'));
  }

  notifyIfUserIsRegistered(isRegistered: boolean): void {
    this.registerUserNotification.next(isRegistered);
  }
}
