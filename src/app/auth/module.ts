import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { Login } from "./login";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageModule } from 'ng-zorro-antd/message';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        NzFormModule,
        NzButtonModule,
        NzInputModule,
        NzAlertModule,
        NzMessageModule
    ],
    declarations: [
        
        Login,
    ],
    providers: [],
})

export class AuthModule { }