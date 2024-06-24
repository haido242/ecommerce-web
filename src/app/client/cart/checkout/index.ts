import { Component, Input } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { BaseComponent } from "@app/abstract/BaseComponent";
import { CartService } from "@app/services/cart.service";
import { OrderService } from "@app/services/order.service";
import { ProductService } from "@app/services/product.service";


@Component({
    selector: 'checkout-client',
    templateUrl: './index.html',
    styleUrls: ['./style.scss']
})

export class CheckoutClient extends BaseComponent{
    constructor(
        private cart : CartService,
        private product : ProductService,
        private fb : FormBuilder,
        private route : ActivatedRoute,
        private order : OrderService
    ) {
        super();
    }
    data : any
    checkoutForm : FormGroup = new FormGroup({
        name: this.fb.control(''),
        phone: this.fb.control(''),
        address: this.fb.group({
            city: this.fb.control(''),
            district: this.fb.control(''),
            ward: this.fb.control(''),
            street: this.fb.control('')
        }),
        note: this.fb.control(''),
        paymentMethod: this.fb.control('')
    })

    submitForm() {
        const address = this.checkoutForm.get('address').value
        const payment = this.checkoutForm.get('paymentMethod').value
        
                    
                    
        this.cart.checkout(payment, address).subscribe(
            (res : any) => {
                this.message.success(res.message)
                this.cart.pay(res.data._id).subscribe(
                    (res : any) => {
                        this.message.success(res.message)
                        if (payment === 'paypal') {
                            window.open(res.data.links.find(link => link.rel === 'approval_url').href, '_blank');
                        } else if (payment === 'vnpay') {
                            window.open(res.data, '_blank');
                        } else if (payment === 'zalopay') {
                            window.open(res.data.order_url, '_blank');
                        }

                        this.cart.clearCart().subscribe(
                            (res : any) => {
                                this.message.success(res.message)
                                this.fetchCart()
                            },
                            err => {
                                this.message.error(err.error.message)
                            }
                        )
                    },
                    err => {
                        this.message.error(err.error.message)
                    }
                )
                
            },
            err => {
                this.message.error(err.error.message)
            }
        )


    }
    ngOnInit(): void {
        super.ngOnInit();
        if(!this.isLoggedIn()){
            this.goToLogin()
        }
        this.fetchCart()
        if(this.route.snapshot.queryParams.orderId){
            this.order.getOrderById(this.route.snapshot.queryParams.orderId).subscribe(
                (res : any) => {
                    let payment = res.data.paymentInfo.paymentMethod
                    this.checkoutForm.patchValue({
                        address: {
                            city: res.data.shippingAddress.city,
                            district: res.data.shippingAddress.district,
                            ward: res.data.shippingAddress.ward,
                            street: res.data.shippingAddress.street
                        },
                        paymentMethod: res.data.paymentInfo.paymentMethod
                    })
                    this.checkoutForm.disable()
                    this.cart.pay(res.data._id).subscribe(
                        (res : any) => {
                            this.message.success(res.message)
                            if (payment === 'paypal') {
                                window.open(res.data.links.find(link => link.rel === 'approval_url').href, '_blank');
                            } else if (payment === 'vnpay') {
                                window.open(res.data, '_blank');
                            } else if (payment === 'zalopay') {
                                window.open(res.data.order_url, '_blank');
                            }
                        },
                        err => {
                            this.message.error(err.error.message)
                        }
                    )
                }
            )
        }
    }
    fetchCart() {
        this.cart.getCart().subscribe(
            (res :any) => {
                this.data = res.data
                this.getProducts()

            },
            err => {
                this.message.error(err.error.message)
            }
        )
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


}