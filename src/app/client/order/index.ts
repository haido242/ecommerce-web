import { Component } from "@angular/core";
import { BaseComponent } from "@app/abstract/BaseComponent";
import { OrderService } from "@app/services/order.service";


@Component({
    selector: "my-order",
    templateUrl: "./index.html",
    styleUrls: ["./style.scss"]
})

export class MyOrder extends BaseComponent{
    constructor(
        private orderService: OrderService,
    ) {
        super();
    }
    ngOnInit(): void {
        super.ngOnInit();
        this.fetchOrder();
    }
    data : any
    fetchOrder(){
        this.orderService.getMyOrders().subscribe((res: any) => {
            this.data = res.data as any;
            console.log("data", this.data)
        })
    }

    onPay(id){
        this.router.navigate(["shop/cart/checkout"], {queryParams: {orderId: id}});
    }



    getProductNames(orderItems) {
        if (!orderItems) return "";
        return orderItems.map(item => item.product.name).join(", ");
    }

}