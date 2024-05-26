import { Component } from "@angular/core";
import { BaseComponent } from "@app/abstract/BaseComponent";

@Component({
    selector: 'order-management',
    templateUrl: './index.html',
    styleUrls: ['./index.scss']
})

export class OrderManagement extends BaseComponent{
    constructor() {
        super();
        console.log('Order Management Component');
    }
}