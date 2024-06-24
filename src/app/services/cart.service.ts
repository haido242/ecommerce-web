import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Const } from "@app/const/Const";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: "root"
})
export class CartService {

    user = this.auth.getCurrentUser();

    constructor(private http: HttpClient, private auth: AuthService) {

    }

    addToCart(product) {

        return this.http.post(Const.backendUrl + "/api/carts/" + this.user['_id'], product)
    }

    checkout(
        payment : any,
        address : any,
    ){
        let paymentInfo = {
            paymentMethod: payment
        }
        let shippingAddress = {
            city: address.city,
            district: address.district,
            ward: address.ward,
            street: address.street,
        }
        return this.http.post(Const.backendUrl + "/api/carts/" + this.user['_id'] + '/checkout', { paymentInfo, shippingAddress })
    }

    pay(orderId) {
        return this.http.post(Const.backendUrl + "/api/payments/create", {orderId })
    }



    removeFromCart(productId) {
        return this.http.delete(Const.backendUrl + "/api/carts/" + this.user['_id'] + "/" + productId)
    }

    clearCart() {
        return this.http.delete(Const.backendUrl + "/api/carts/" + this.user['_id'])
    }

    changeQuantity(product, quantity) {
        const productId = product
        quantity
        return this.http.put(Const.backendUrl + "/api/carts/" + this.user['_id'],{ quantity, productId })
    }

     getCart() {
        return this.http.get(Const.backendUrl + "/api/carts/" + this.user['_id']);
    }

    // checkout() {
    //     return this.http.post(Const.backendUrl + "/api/orders", { products: this.cart }).subscribe(
    //         response => {
    //             console.log("Order placed successfully");
    //             this.clearCart();
    //         },
    //         error => {
    //             console.error("Error placing order:", error);
    //         }
    //     );
    // }
}   