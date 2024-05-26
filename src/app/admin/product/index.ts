import { ProductService } from './../../services/product.service';
import { Component } from "@angular/core";
import { BaseComponent } from "@app/abstract/BaseComponent";

@Component({
    selector: 'product-management',
    templateUrl: './index.html',
    styleUrls: ['./index.scss']
})

export class ProductManagement extends BaseComponent{
    constructor(private productService: ProductService) {
        super();
        console.log('Product Management Component');
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.productService.getProducts().subscribe((res) => {
            console.log('Products', res);
        });

    }
}