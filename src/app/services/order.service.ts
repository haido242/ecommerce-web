import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"



@Injectable({
    providedIn: 'root'
    })
export class OrderService {
    constructor(private http: HttpClient) {
    }
    getOrders() {
        return this.http.get("https://ecommerce-server-82px.onrender.com/api/orders")
    }
    getOrderById(id) {
        return this.http.get("https://ecommerce-server-82px.onrender.com/api/Orders/" + id)
    }
    createOrder(Order) {
        return this.http.post("https://ecommerce-server-82px.onrender.com/api/Orders", Order)
    }
    updateOrder(id, Order) {
        return this.http.put("https://ecommerce-server-82px.onrender.com/api/Orders/" + id, Order)
    }
    deleteOrder(id) {
        return this.http.delete("https://ecommerce-server-82px.onrender.com/api/Orders/" + id)
    }
    getOrdersByUser(id) {
        return this.http.get("https://ecommerce-server-82px.onrender.com/api/orders/get-user-order/" + id)
    }
}