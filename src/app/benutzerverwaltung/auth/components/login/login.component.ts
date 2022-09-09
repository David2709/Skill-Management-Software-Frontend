import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService) { }

  onSubmit(f: NgForm) {
    this.authService.login(f.value).subscribe(x => console.log('User Logged in'),
      err => console.error(err));
  }
}
