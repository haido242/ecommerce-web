import { Component } from "@angular/core";
import { BaseComponent } from "@app/abstract/BaseComponent";

@Component({
    selector: 'product-management',
    templateUrl: './index.html',
    styleUrls: ['./index.scss']
})

export class ProductManagement extends BaseComponent{
    constructor() {
        super();
        console.log('Product Management Component');
    }
}