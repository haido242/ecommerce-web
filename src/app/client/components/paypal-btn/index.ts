import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { CartService } from "@app/services/cart.service";
import { OrderService } from "@app/services/order.service";
import { NzMessageService } from "ng-zorro-antd/message";

declare var paypal: any;

@Component({
    selector: 'paypal-btn',
    templateUrl: './index.html',
    styleUrls: ['./style.scss']
})

export class PaypalBtn implements OnInit{
    @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
    constructor(
        private orderService : OrderService,
        private cartService : CartService,
        private messageService : NzMessageService

    ) {
    }
    @Input() cartData: any;
    ngOnInit(): void {
        paypal
      .Buttons({
        createOrder: (data, actions) => {
            console.log(this.cartData)
          return actions.order.create({
            purchase_units: [
              {
                description: 'Your description',
                amount: {
                  currency_code: 'USD',
                  value: this.convertVNDtoUSD(this.cartData.totalPrice)
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.cartService.clearCart().subscribe(
                res => {
                    this.messageService.success("Order success")
                    setTimeout(() => {
                        window.location.href = "/shop"
                        ,7000})
                }
            )
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }

  convertVNDtoUSD(price) {
    const rate = 25000
    return price / rate
}
    
}