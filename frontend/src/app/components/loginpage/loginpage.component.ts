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
    // console.log(this.loginUserData);
    this.authService.loginUser(this.loginUserData).subscribe((res) => {
      console.log(res);
    });
  }
}
