import { ProductService } from './../../services/product.service';
import { Component } from "@angular/core";
import { BaseComponent } from "@app/abstract/BaseComponent";
import { ModalService } from '@app/dialog/antModal';
import { FormModalProduct } from './form-modal-product';

@Component({
    selector: 'product-management',
    templateUrl: './index.html',
    styleUrls: ['./index.scss']
})

export class ProductManagement extends BaseComponent{
    listProducts: any[] = [];

    constructor(
        private productService: ProductService,
        private modalService: ModalService
    ) {
        super();
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.getAllProducts();
    }

    getAllProducts() {
        this.productService.getProducts().subscribe((res: any) => {
            this.listProducts = res.data as any;
            console.log(this.listProducts);
        });
    }



    onBtnAddProduct(event?: any) {
        const modal = this.modalService.openModalWithSize(
            FormModalProduct,
            { isEditing: false, productData: {} }
            , 'Add New Product', 
            800,
            () => {
                // lấy dữ liệu từ formodalproduct
            },
            () => {
                console.log('Cancel');
            });
    }

    onBtnLowStock() {
        this.productService.getProductsLowStock().subscribe((res: any) => {
            this.listProducts = res.data as any;
        });
    }

    deleteProduct(id: any) {
        this.productService.deleteProduct(id).subscribe((res: any) => {
            this.getAllProducts();
        }, (err: any) => { console.log(err); });
    }

    onBtnDeleteProduct(id: any) {
        console.log(id);
        this.modalService.openModalConfirm(
            'Delete Product', 
            'Are you sure you want to delete this product?', 
            () => {
                this.deleteProduct(id);
            },
            () => {
                console.log('Cancel');
            });
    }

    onBtnEditProduct(product: any) {
        this.modalService.openModalWithSize(
            FormModalProduct,
            { isEditing: true, productData: product }
            , 'Edit Product', 
            800,
            () => {
                console.log('OK');
            },
            () => {
                console.log('Cancel');
            });
    }


}