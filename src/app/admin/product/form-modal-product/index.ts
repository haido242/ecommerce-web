import { Component, inject } from "@angular/core";
import { BaseComponent } from "@app/abstract/BaseComponent";
import { NzModalRef, NZ_MODAL_DATA } from "ng-zorro-antd/modal";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzUploadFile } from "ng-zorro-antd/upload";
import { ProductService } from "@app/services/product.service";

@Component({
  selector: 'form-modal-product',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
})
export class FormModalProduct extends BaseComponent {
  isEditing: boolean = false;
  productData: any;

  readonly nzModalData = inject(NZ_MODAL_DATA);
  private modalRef = inject(NzModalRef);

  productForm: FormGroup;
  fileList: any[] = [];

  beforeUpload = (file: NzUploadFile): boolean => {
    setTimeout(() => {
      this.fileList = this.fileList.concat(file);
    }, 0);
    return false;
  };

  // fake list category
  listCategory = [
    { _id: '6645868e6e14f2dfb2ba43e1', name: 'Smart Phone' },
    { _id: '664587d259daa916321d1290', name: 'Smart watch' },
    { _id: '665ad622c31c1f7c75d8c9aa', name: 'Phone' },
  ]

  constructor(private fb: FormBuilder, private productService: ProductService) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
    this.isEditing = this.nzModalData.isEditing;
    this.productData = this.nzModalData.productData;
    if (this.isEditing && this.productData) {
        console.log("productData", this.productData);
        this.productForm.patchValue({
            ...this.productData,
            category: this.productData.category._id  // Assuming `category` in `productData` is an object
        });
    }
}


  initForm() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      status: ['', Validators.required],
      stockQuantity: ['', Validators.required],
      isPhysicalProduct: [false],
      weight: ['', Validators.required],
      length: ['', Validators.required],
      width: ['', Validators.required],
      height: ['', Validators.required],
      productImage: [''] // Thêm productImage vào form group
    });
  }

  getListCategory() {}

  handleChange($event: any) {
    console.log("event", $event);
    console.log("fileList", this.fileList);
  }

  handleCancel() {
    this.modalRef.close(); // Đóng modal khi nhấn cancel
  }

  handleOk() {
    // if (this.productForm.invalid) {
    //   this.productForm.markAllAsTouched();
    //   return;
    // }
    if(this.isEditing) {
        this.updateProduct();
    } else {
        this.addNewProduct();
    }
  }

  addNewProduct() {
    const formData = new FormData();
    const file = this.fileList[0];
    if (file) {
      formData.append('productImage', file as any);
    }

    Object.keys(this.productForm.controls).forEach(key => {
      formData.append(key, this.productForm.get(key)?.value);
    });

    console.log("formData", formData);
    this.productService.createProduct(formData).subscribe((res: any) => {
      console.log(res);
      this.modalRef.close(); // Đóng modal khi sản phẩm được tạo thành công
    }, (err: any) => {
      console.log(err);
    });
  }

  updateProduct() {
    const formData = new FormData();
    const file = this.fileList[0];
    if (file) {
        formData.append('productImage', file as any);
    }

    Object.keys(this.productForm.controls).forEach(key => {
        formData.append(key, this.productForm.get(key)?.value);
    });

    // Debugging
    for (const [key, value] of (formData as any).entries()) {
        console.log(key, value);
    }

    this.productService.updateProduct(this.productData._id, formData).subscribe((res: any) => {
        console.log(res);
        this.modalRef.close(); // Đóng modal khi sản phẩm được cập nhật thành công
    }, (err: any) => {
        console.log(err);
    });
}

}
