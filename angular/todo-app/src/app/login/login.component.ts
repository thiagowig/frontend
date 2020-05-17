import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin() {
    if (this.username === 'thiagowig' && this.password === 'admin') {
      this.router.navigate(['welcome'])
      this.invalidLogin = false

    } else {
      this.invalidLogin = true
    }
  }

}
