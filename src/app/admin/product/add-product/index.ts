import { Component } from "@angular/core";
import { BaseComponent } from "@app/abstract/BaseComponent";

@Component({
    selector: 'add-product',
    templateUrl: './index.html',
    styleUrls: ['./index.scss']
})

export class AddProduct extends BaseComponent{
  constructor() {
      super();
  }
}