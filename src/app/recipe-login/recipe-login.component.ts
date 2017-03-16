import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authenticate.service';
import { UserService } from '../services/user.service';
import { AlertService } from '../services/alert.service';
import { NotificationBarService, NotificationType } from 'angular2-notification-bar'
import { AuthService } from "angular2-social-login";

@Component({
  selector: 'app-recipe-login',
  templateUrl: './recipe-login.component.html',
  styleUrls: ['./recipe-login.component.css'],

})

export class RecipeLoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
 public user;
  sub: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private _notificationBarService: NotificationBarService,
    public _auth: AuthService
  ) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
      data => {
        // this.router.navigate([this.returnUrl]);
        this.router.navigate(['/recipe-browse']);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
        this._notificationBarService.create({ message: 'Error: Username or password is incorrect', type: NotificationType.Error });

      });
  }
  signIn(provider){
    this.sub = this._auth.login(provider).subscribe(
      (data) => {this.user=data;}
    )
  }

  logout(){
    this._auth.logout().subscribe(
      (data)=>{console.log(data);this.user=null;}
    )
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
