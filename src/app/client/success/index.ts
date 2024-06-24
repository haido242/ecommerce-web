import { Component } from "@angular/core";


@Component({
    selector: "success",
    templateUrl: "./index.html",
    styleUrls: ["./style.scss"]
})

export class Success {
    constructor() {
    }
    ngOnInit(): void {
        // go to home page after 5 seconds
        setTimeout(() => {
            window.location.href = '/';
        }, 5000);
    }
}