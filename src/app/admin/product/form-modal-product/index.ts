import { Component, Input, inject } from "@angular/core";
import { BaseComponent } from "@app/abstract/BaseComponent";
import { NzModalRef, NZ_MODAL_DATA } from "ng-zorro-antd/modal";
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    NG_VALUE_ACCESSOR,
    NonNullableFormBuilder,
    ValidatorFn,
    Validators
  } from '@angular/forms';

@Component({
    selector: 'form-modal-product',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
})

export class FormModalProduct extends BaseComponent{
    isEditing: boolean = false;
    productData: any;

    readonly nzModalData = inject(NZ_MODAL_DATA);

    productForm: FormGroup;
    fileList: any[] = [];
    // fake list cvategory
    listCategory = [
        {_id: '1', name: 'Category 1'},
        {_id: '2', name: 'Category 2'},
        {_id: '3', name: 'Category 3'},
        {_id: '4', name: 'Category 4'},
    ]
    constructor( private fb: FormBuilder) { 
        super();
    }

    ngOnInit(): void {
        this.initForm();
        this.isEditing = this.nzModalData.isEditing;
        this.productData = this.nzModalData.productData;
        console.log("isEditing", this.isEditing);
        console.log("productData", this.productData);
        if(this.isEditing && this.productData) {
            this.productForm.patchValue(this.productData);
        }
    }

    initForm() {
        this.productForm = this.fb.group({
            name: ['', Validators.required],
            price: ['', Validators.required],
            description: [''],
            image: [''],
            category: ['', Validators.required],
            status: [''],
            stockQuantity: ['', Validators.required],
            isPhysicalProduct: [false],
            weight: ['', Validators.required],
            length: ['', Validators.required],
            width: ['', Validators.required],
            height: ['', Validators.required],
        })
    }

    getListCategory() {
        
    }

    handleChange($event: any) {
        
    }

    public returnDataForm: (dataFormJson) => void = () => { }
}