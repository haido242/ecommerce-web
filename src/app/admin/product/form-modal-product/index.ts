import { Component } from "@angular/core";
import { BaseComponent } from "@app/abstract/BaseComponent";
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    NonNullableFormBuilder,
    ValidatorFn,
    Validators
  } from '@angular/forms';

@Component({
    selector: 'form-modal-product',
    templateUrl: './index.html',
    styleUrls: ['./index.scss']
})

export class FormModalProduct extends BaseComponent{
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
    }

    initForm() {
        this.productForm = this.fb.group({
            name: ['', Validators.required],
            price: ['', Validators.required],
            description: [''],
            image: [''],
            category: ['', Validators.required],
            status: [''],
            quantity: ['', Validators.required]
        })
    }

    getListCategory() {
        
    }

    handleChange($event: any) {
        
    }
}