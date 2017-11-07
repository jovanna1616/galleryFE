import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { RequestOptions, Response } from '@angular/http';
import { User } from '../models/user';

@Injectable()
export class AuthService {
	public isAuthenticated: boolean;
  public user: User;
  
  constructor(private http: HttpClient) {
  	this.isAuthenticated = !!window.localStorage.getItem('loginToken');
 }
  login(user: User)
  {
  	return new Observable((o: Observer<any>) => {
    	this.http.post('http://localhost:8000/api/login', {
  			'email': user.email,
  			'password': user.password
  	  	})
        .subscribe(
          (data: {token: string}) => {
          	window.localStorage.setItem('loginToken', data.token);
          	this.isAuthenticated = true;
            o.next(data.token);
            return o.complete();
          },
          (err) => {
          	// samo proslediti
          	return o.error(err);
          }
        );
      });
  }
  public getRequestHeaders()
  {
  	return new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('loginToken'));
  }

  public logout()
  {
  	window.localStorage.removeItem('loginToken');
  	this.isAuthenticated = false;	
  }

  register(user: User)
  {
    return new Observable((o: Observer<any>) => {
      this.http.post('http://localhost:8000/api/login', {
        'first_name': user.firstName,
        'last_name': user.lastName,
        'email': user.email,
        'password': user.password,
        'password_confirm': user.passwordConfirm,
        'accepted_terms': user.acceptedTerms 
        })
        .subscribe(
          (data: {token: string}) => {
            window.localStorage.setItem('loginToken', data.token);
            this.isAuthenticated = true;
            o.next(data.token);
            return o.complete();
          },
          (err) => {
            // samo proslediti
            return o.error(err);
          }
        );
      });
  }
}
