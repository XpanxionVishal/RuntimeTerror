import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  loginUserNotification: Subject<string> = new Subject<string>();

  constructor(
  ) {
  }

  notifyLoggedInUserExists(loggedInUser: string) {
    this.loginUserNotification.next(localStorage.getItem('token'));
  }
}