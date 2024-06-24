import { OrderService } from "@app/services/order.service";
import { Component } from "@angular/core";
import { BaseComponent } from "@app/abstract/BaseComponent";
import { ModalService } from '@app/dialog/antModal';
@Component({
    selector: 'order-management',
    templateUrl: './index.html',
    styleUrls: ['./index.scss']
})

export class OrderManagement extends BaseComponent{
    listOrder: any[] = [];
    keyWordSearch: string = '';
  
    constructor(
      private orderService: OrderService,
      private modalService: ModalService
    ) {
      super();
    }
  
    ngOnInit(): void {
      super.ngOnInit();
      this.getAllOrder();
    }
    getAllOrder() {
        this.orderService.getOrders().subscribe((res: any) => {
            this.listOrder = res.data as any;
            console.log("listOrder", this.listOrder)
        });
    }
    getProductNames(orderItems) {
      if (!orderItems) return "";
      return orderItems.map(item => item.product.name).join(", ");
    }
  
    getOrderByStatus(status) {
        
    }
}