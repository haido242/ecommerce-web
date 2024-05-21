import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { Login } from "./login";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [
        
        Login,
    ],
    providers: [],
})

export class AuthModule { }