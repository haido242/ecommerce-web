import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";




@Injectable({
    providedIn : 'root'
})

export class PaymentService {
    constructor(
        private http: HttpClient
    ) {
    }
    getPayments() {
        return [
            {
                id: 1,
                name: "Paypal",
                image: "https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg"
            },
            {
                id: 2,
                name: "Stripe",
                image: "https://stripe.com/img/v3/home/twitter.png"
            }
        ]
    }
    getPaymentById(id) {
        return this.getPayments().find(payment => payment.id == id)
    }

}