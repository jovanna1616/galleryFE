import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './../../../shared/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './../../../shared/models/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  
  login(user: User)
  {
  	this.authService.login(user)
  		.subscribe(
  			() => {
  				this.router.navigateByUrl('/');
  			},
		    (err: HttpErrorResponse) => {
		    	alert(`${err.error.error}`);
		    }
  		);
  }
  ngOnInit() {
  }

}
