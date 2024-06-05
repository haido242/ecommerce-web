import { Component } from "@angular/core";
import { BaseComponent } from "@app/abstract/BaseComponent";

@Component({
    selector: "navbar",
    templateUrl: "./index.html",
    styleUrls: ["./index.scss"]
})

export class Navbar extends BaseComponent{
    constructor() {
        super();
    }

    onBtnLogout() {
        this.auth.logout();
    }

    getCurrentPageTitle(): string {
        switch (this.getCurrentPage()) 
        {
            case "/admin/home":
                return "Admin Home";
            case "/admin/product":
                return "Products";
            case "/admin/categories":
                return "Categories";
            case "/admin/order":
                return "Orders";
            case "/admin/user":
                return "Users";
            default:
                return "Admin";
        }
    }
}
