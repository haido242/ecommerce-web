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
export class ProductManagement extends BaseComponent {
  listProducts: any[] = [];
  keyWordSearch: string = '';

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

  onChangeStatusProduct(event: any, product: any) {
    let status = { status: event };
    console.log(status);
    this.productService.updateProduct(product._id, status).subscribe((res: any) => {
      this.getAllProducts();
    });
  }

  getAllProducts() {
    console.log('Get all products');
    this.productService.getProducts().subscribe((res: any) => {
      this.listProducts = res.data as any;
    });
  }

  onBtnAddProduct(event?: any) {
    const modal = this.modalService.openModalWithSize(
      FormModalProduct,
      { isEditing: false, productData: {} },
      'Add New Product',
      800,
      () => {
        this.getAllProducts(); // Làm mới danh sách sản phẩm sau khi thêm mới
      },
      () => {
        console.log('Cancel');
      }
    );
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
      { isEditing: true, productData: product },
      'Edit Product',
      800,
      () => {
        this.getAllProducts(); // Làm mới danh sách sản phẩm sau khi chỉnh sửa
      },
      () => {
        console.log('Cancel');
      });
  }

  onSearchProduct($event) {
    
  }
}
