import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { Login } from './auth/login';
import { AuthModule } from './auth/module';
import { Register } from './auth/register';
import { Success } from './client/success';

const routes: Routes = [
  { path: 'login', component: Login},
  { path: 'register', component: Register},
  { path: 'success', component: Success},
  { path: '**', redirectTo: 'shop/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    ClientModule,
    AdminModule,
  ]
})
export class AppRoutingModule { }
