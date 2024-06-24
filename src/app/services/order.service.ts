import { AuthService } from './auth.service';
import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Const } from "@app/const/Const"



@Injectable({
    providedIn: 'root'
    })
export class OrderService {
    constructor(private http: HttpClient, private authService: AuthService) {
    }
    baseUrl = Const.backendUrl;
    getOrders() {
        return this.http.get(this.baseUrl + "/api/orders");
    }
    getOrderById(id) {
        return this.http.get(this.baseUrl + "/api/Orders/" + id);
    }
    getMyOrders() {
        return this.http.get(this.baseUrl + "/api/Orders/get-user-order/" + this.authService.getCurrentUser()['_id']);
    }
    createOrder(Order) {
        return this.http.post(this.baseUrl + "/api/Orders", Order);
    }
    updateOrder(id, Order) {
        return this.http.put(this.baseUrl + "/api/Orders/" + id, Order);
    }
    deleteOrder(id) {
        return this.http.delete(this.baseUrl + "/api/Orders/" + id);
    }
    getOrdersByUser(id) {
        return this.http.get(this.baseUrl + "/api/orders/get-user-order/" + id);
    }
}