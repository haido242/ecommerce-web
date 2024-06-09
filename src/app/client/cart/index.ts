import { Component } from "@angular/core";
import { BaseComponent } from "@app/abstract/BaseComponent";
import { CartService } from "@app/services/cart.service";
import { ProductService } from "@app/services/product.service";


@Component({
    selector: 'cart-client',
    templateUrl: './index.html',
    styleUrls: ['./style.scss']
})

export class CartClient extends BaseComponent{
    constructor(
        private cart : CartService,
        private product : ProductService
    ) {
        super();
    }
    data : any
    ngOnInit(): void {
        super.ngOnInit();
        if(!this.isLoggedIn()){
            this.goToLogin()
        }
        this.fetchCart()
    }

    getProducts() {
        this.product.getProductsByIds(this.data.cartItems.map(item => item.product)).subscribe(
            (res : any) => {
                this.data.cartItems = this.data.cartItems.map(item => {
                    const productData = res.data.find(p => p._id === item.product)
                    return {
                        ...item,
                        productData
                    }
                }
                )
            },
            err => {
                this.message.error(err.error.message)
            }
        )
    }

    fetchCart() {
        this.cart.getCart().subscribe(
            (res :any) => {
                this.data = res.data
                this.getProducts()
                console.log("cart", this.data)

            },
            err => {
                this.message.error(err.error.message)
            }
        )
    }
    removeItem(item) {
        const id = item.product

        this.cart.removeFromCart(id).subscribe(
            res => {
                this.fetchCart()
            },
            err => {
                this.message.error(err.error.message)
            }
        )
    }
    clearCart() {
        this.cart.clearCart().subscribe(
            res => {
                this.fetchCart()
            },
            err => {
                this.message.error(err.error.message)
            }
        )
    }
    updateQuantity(product, quantity) {
        console.log(product, quantity)
        this.cart.changeQuantity(product, quantity).subscribe(
            res => {
                this.fetchCart()
            },
            err => {
                this.message.error(err.error.message)
            }
        )
    }
    checkout() {
        // return this.data.cartItems.reduce((acc, item) => acc + item.productData.price * item.quantity, 0)
    }
}