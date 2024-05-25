import { Component } from "@angular/core";
import { BaseComponent } from "@app/abstract/BaseComponent";


@Component({
    selector: "client-topnav",
    templateUrl: "./index.html",
    styleUrls: ["./style.scss"]
})

export class TopnavComponent extends BaseComponent{
    constructor() {
        super();
    }
}
