import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = ''
  password: string = ''
  errorMessage: string = 'Invalid credentials'
  invalidLogin: boolean = false

  constructor(private router: Router,
              private authService: HardcodedAuthenticationService,
              private basicAuthService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    if (this.authService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false

    } else {
      this.invalidLogin = true
    }
  }

  handleBasicAuthLogin() {
    this.basicAuthService.authenticate(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['welcome', this.username])
        this.invalidLogin = false
      },
      error => {
        console.log(error)
        this.invalidLogin = true
      }
    )
  }

}
