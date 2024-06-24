import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { BaseComponent } from "@app/abstract/BaseComponent";
import { ProductService } from "@app/services/product.service";


@Component({
    selector: "search",
    templateUrl: "./index.html",
    styleUrls: ["./style.scss"]
})

export class Search extends BaseComponent{
    constructor(
        private product : ProductService,
        private route : ActivatedRoute,
        private fb : FormBuilder
    ) {
        super();
    }
    ngOnInit(): void {
        this.fetchProducts()
    }
    searchForm : FormGroup = new FormGroup({
        keyword : this.fb.control(''),
        sort : this.fb.control(''),
        order : this.fb.control(''),
        category : this.fb.control('')
    })
    sortOptions = [
        { value: 'price', label: 'Price' },
        { value : 'createdAt', label : 'Newest' },
        { value : 'name', label : 'Name' }
    ]
    orderOptions = [
        { value : 1, label : 'Ascending' },
        { value : -1, label : 'Descending' }
    ]
    categoryOptions = [
        { value : '6645868e6e14f2dfb2ba43e1', label : 'Phone' },
        { value : '665ad622c31c1f7c75d8c9aa', label : 'Laptop' },
        { value : '665ad622c31c1f7c75d8c9aa', label : 'Tablet' },
        { value : '664587d259daa916321d1290', label : 'Accessory' }
    ]
    data : any
    fetchProducts() {
        let param = this.route.snapshot.queryParams
        this.product.getProducts(param).subscribe(
            (res : any) => {
                console.log("res", res)
                this.data = res.data
            },
            err => {
                console.log("err", err)
            }
        )
    }
    async submitForm() {
        let keyword = this.searchForm.get('keyword').value ? this.searchForm.get('keyword').value : ''
        let sort = this.searchForm.get('sort').value ? this.searchForm.get('sort').value : 'createAt'
        let order = this.searchForm.get('order').value ? this.searchForm.get('order').value : 1
        let category = this.searchForm.get('category').value ? this.searchForm.get('category').value : '6645868e6e14f2dfb2ba43e1'
        await this.router.navigate(['/shop/search'], { queryParams: { keyword, sort, order, category } })
        this.fetchProducts()
    }
}