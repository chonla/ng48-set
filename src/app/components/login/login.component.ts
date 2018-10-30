import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AccessToken } from 'src/app/models/access-token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'login': '',
      'password': ''
    });
  }

  login() {
    this.auth.login(this.loginForm.value).subscribe((data: AccessToken) => {
      this.auth.setToken(data.token);
      this.router.navigate(['/dashboard']);
    });
  }

}
