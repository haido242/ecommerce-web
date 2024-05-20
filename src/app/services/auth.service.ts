import { Router } from "@angular/router";


export class AuthService {
    constructor(private router: Router) { }
    login() {
        this.router.navigate(["/admin"]);
    }
    logout() {
        this.router.navigate(["/"]);
    }
}