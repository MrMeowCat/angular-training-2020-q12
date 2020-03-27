import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public loginService: LoginService,
              private router: Router) { }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/', 'login']);
  }
}
