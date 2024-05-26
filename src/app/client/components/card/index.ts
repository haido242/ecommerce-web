import { Component } from "@angular/core";
import { BaseComponent } from "@app/abstract/BaseComponent";



@Component({
    selector: "client-product-card",
    templateUrl: "./index.html",
    styleUrls: ["./style.scss"]
})

export class ProductCard extends BaseComponent{
    constructor() {
        super();
    }
    ngOnInit(): void {
        super.ngOnInit();
    }
}
