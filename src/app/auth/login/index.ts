import { AuthService } from '@services/auth.service';
import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';


@Component({
    selector: "login",
    templateUrl: "./index.html",
    styleUrls: ["./style.scss"]
})
export class Login {
    constructor(private authService : AuthService, private message : NzMessageService, private router : Router) { }
    ngOnInit(): void {
        if(this.authService.isLoggedIn()){
            if(this.authService.getCurrentUser()['role'] === "admin"){
                this.router.navigate(["/admin"]);
            }
            else{
                this.router.navigate(["/shop"]);
            }
        }
    }

    loginForm: FormGroup = new FormGroup({
        email: new FormControl("", Validators.required),
        password: new FormControl("", Validators.required)
    });

    onLogin() {
        const { email, password } = this.loginForm.value;
        console.log(this.loginForm.value);
        this.authService.login(email, password).subscribe(
            res => {
                this.authService.loginSuccess(res);
            },
            err => {
                this.message.error(err.error.message);
                
            }
        )
        

    }
}

