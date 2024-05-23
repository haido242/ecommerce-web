import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BaseComponent } from "@app/abstract/BaseComponent";
import { AuthService } from "@app/services/auth.service";


@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss']
})

export class ClientComponent extends BaseComponent {
    constructor() {
        super();
    }
    ngOnInit(): void {
        super.ngOnInit();
        if (this.auth.isLoggedIn() && this.auth.getCurrentUser()['role'] === "admin") {
            this.router.navigate(["/admin"]);
        }
    }
}
