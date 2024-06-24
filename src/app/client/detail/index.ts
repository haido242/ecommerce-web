import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BaseComponent } from "@app/abstract/BaseComponent";
import { CartService } from "@app/services/cart.service";
import { ProductService } from "@app/services/product.service";



@Component({
    selector: 'detal-client',
    templateUrl: './index.html',
    styleUrls: ['./style.scss']
})

export class DetailClient extends BaseComponent{
    constructor(
        private route: ActivatedRoute,
        private productService: ProductService,
        private cart : CartService
    ) {
        super();
    }
    ngOnInit(): void {
        super.ngOnInit();
        this.fetchData()
    }
    product: any = {};
    imageMain: any = "";
    productList : any = []
    fetchData(){
        this.getDetail()
        this.getLists()
    }
    getDetail() {
        const id = this.route.snapshot.params.id;
        this.productService.getProductById(id).subscribe(
            (res : any) => {
                this.product = res.data
                this.imageMain = this.product.image[0]
                console.log("product", this.product)
            },
            err => {
                this.message.error(err.error.message)
            }
        )

    }
    getLists() {
        const params = {
            limit: 4,
            page: 1,
            sort: "createdAt",
            order: "desc"
        }
        this.productService.getProducts({params}).subscribe(
            (res : any) => {
                this.productList = res.data
            },
            err => {
                this.message.error(err.message)
            }
        )
    }
    changeImage(image) {
        this.imageMain = image
    }
    addToCart(){
        console.log("add to cart", this.product)
        if(!this.isLoggedIn()){
            this.goToLogin()
        }
        const param = {
            productId: this.product._id,
            quantity: 1
        }
        this.cart.addToCart(param).subscribe(
            res => {
                this.message.success("Added to cart")
            },
            err => {
                this.message.error(err.error.message)
            }
        )
    }





}