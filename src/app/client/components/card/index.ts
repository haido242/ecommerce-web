import { Component, Input } from "@angular/core";
import { BaseComponent } from "@app/abstract/BaseComponent";
import { CartService } from "@app/services/cart.service";



@Component({
    selector: "client-product-card",
    templateUrl: "./index.html",
    styleUrls: ["./style.scss"]
})

export class ProductCard extends BaseComponent{
    constructor(
        private cart : CartService
    ) {
        super();
    }
    @Input() product;
    ngOnInit(): void {
        super.ngOnInit();
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
