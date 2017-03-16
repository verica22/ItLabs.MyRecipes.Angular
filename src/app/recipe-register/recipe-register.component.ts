import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NotificationBarService, NotificationType } from 'angular2-notification-bar'
import { UserService } from '../services/user.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-recipe-register',
  templateUrl: './recipe-register.component.html',
  styleUrls: ['./recipe-register.component.css']
})
export class RecipeRegisterComponent {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
     private  _notificationBarService: NotificationBarService
     
  ) { }

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
      data => {
        // this.alertService.success('Registration successful', true);
        this._notificationBarService.create({ message: 'Registration successful', type: NotificationType.Success });
        this.router.navigate(['/recipe-login']);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }
}
