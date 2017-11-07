import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../../shared/services/auth.service';
import { User } from './../../../shared/models/user';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  register(user: User)
  {
  	this.authService.register(user)
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
