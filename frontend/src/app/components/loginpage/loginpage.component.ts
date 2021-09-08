import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {
  loginUserData: any = {};

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  handleLogin() {
    //this.router.navigate(['/admin/dashboard']);

    this.authService.loginUser(this.loginUserData).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('token', res.token);
    });
  }
}
