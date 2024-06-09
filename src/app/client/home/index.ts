import { Component } from "@angular/core";
import { BaseComponent } from "@app/abstract/BaseComponent";
import { ProductService } from "@app/services/product.service";


@Component({
    selector: 'home-client',
    templateUrl: './index.html',
    styleUrls: ['./style.scss']
})

export class HomeClient extends BaseComponent {
    constructor(
        private product : ProductService
    ) {
        super();
    }
    list = [];
    listCategory = [
        {
            name: 'Smartphone',
            icon: 'assets/img/icon/phone.svg'
        },
        {
            name: 'Laptop',
            icon: 'assets/img/icon/laptop.svg'
        },
        {
            name: 'Tablet',
        },
        {
            name: 'Watch',
        },
        {
            name: 'Headphone',
        },
        {
            name: 'Camera',
        },
        {
            name: 'Speaker',
        }
    ];
    getIcon(name) {
        return this.listCategory.find(item => item.name === name).icon || 'assets/img/icon/phone.svg';
    }
    ngOnInit(): void {
        this.fetchProducts();
        console.log(this.list);
    }
    fetchProducts() {
        const param = {
            limit: 4,
            page: 1,
            sort: 'createdAt',
            order: 1
        }
        this.product.getProducts(param).subscribe(
            res => {
                console.log("product" ,res);
                this.list = res['data'];
            },
            err => {
                console.log(err);
            }
        )
    }



}