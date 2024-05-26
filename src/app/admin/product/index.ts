import { ProductService } from './../../services/product.service';
import { Component } from "@angular/core";
import { BaseComponent } from "@app/abstract/BaseComponent";

@Component({
    selector: 'product-management',
    templateUrl: './index.html',
    styleUrls: ['./index.scss']
})

export class ProductManagement extends BaseComponent{
    listProducts: any[] = [];

    constructor(private productService: ProductService) {
        super();
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.productService.getProducts().subscribe((res: any) => {
            this.listProducts = res.data as any;
            console.log(this.listProducts);
        });

    }
}