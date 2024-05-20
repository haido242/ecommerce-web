import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { Login } from './auth/login';

const routes: Routes = [
  { path: 'login', component: Login},
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
