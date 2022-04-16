import { Component, OnInit, OnDestroy } from '@angular/core';
import {AssignmentService} from '../../shared/assignment.service';
import {AuthService} from '../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loggedIn = false;

  username = '';
  password = '';

  constructor(private assignmentsService: AssignmentService,
              public authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn();
  }
  ngOnDestroy() {
  }

  isLoggedIn() {
    if (this.authService.loggedIn) {
      this.loggedIn = true;
    }
  }

  login() {
    this.loggedIn = this.authService.logIn(this.username, this.password);
  }

}
