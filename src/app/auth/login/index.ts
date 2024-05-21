import { AuthService } from '@services/auth.service';
import { Component } from "@angular/core";


@Component({
    selector: "login",
    templateUrl: "./index.html",
    styleUrls: ["./style.scss"]
})
export class Login {
    constructor(private authService : AuthService) { }
    ngOnInit(): void {
        this.authService.login("admin@gmail.com", "Admin123");
    }
}

