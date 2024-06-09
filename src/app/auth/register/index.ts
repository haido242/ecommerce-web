import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "@app/services/auth.service";
import { NzMessageService } from "ng-zorro-antd/message";


@Component({
    selector: "register",
    templateUrl: "./index.html",
    styleUrls: ["./style.scss"]
})

export class Register {
    constructor(
        private auth : AuthService,
        private message : NzMessageService
    ) { }
    ngOnInit(): void {
    }

    registerForm:FormGroup = new FormGroup({
        username : new FormControl("", Validators.required),
        email : new FormControl("", [Validators.required, Validators.email]),
        full_name : new FormControl("", Validators.required),
        password : new FormControl("", Validators.required),
        confirmPassword : new FormControl("", Validators.required)
    });

    onRegister(){
        let newUser = this.registerForm.value;
        if(newUser.password !== newUser.confirmPassword){
            this.message.error("Passwords do not match");
            return;
        }
        delete newUser.confirmPassword;
        this.auth.register(newUser).subscribe(
            res => {
                this.auth.registerSuccess();
            },
            err => {
                this.message.error(err.error.message);
            }
        )

    }
        
}