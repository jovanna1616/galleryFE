import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { LayoutComponent } from './../components/layout/layout.component';
import { LoginPageComponent } from './../components/auth/login-page/login-page.component';
import { RegisterPageComponent } from './../components/auth/register-page/register-page.component';

const appRoutes:Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
  ],
  exports: [
    RouterModule
  ],

  declarations: []
})
export class AppRoutingModule { }
