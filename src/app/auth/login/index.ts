import { Component } from "@angular/core";


@Component({
    selector: "login",
    templateUrl: "./index.html",
    styleUrls: ["./style.scss"]
})
export class Login {
    constructor() { }
    ngOnInit(): void {
        console.log("Login");
    }
}

