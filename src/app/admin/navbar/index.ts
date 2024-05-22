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
}
