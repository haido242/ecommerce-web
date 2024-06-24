import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"



@Injectable({
    providedIn: 'root'
    })
export class ProductService {
    constructor(private http: HttpClient) {
    }
    getProducts(params?) {
        return this.http.get("https://ecommerce-server-82px.onrender.com/api/products", { params })
    }
    getProductsByIds(ids) {
        const params = { ids : ids.join(",") }
        return this.http.get("https://ecommerce-server-82px.onrender.com/api/products/getByArray", { params })
    }
    getProductById(id) {
        return this.http.get("https://ecommerce-server-82px.onrender.com/api/products/" + id)
    }
    createProduct(product) {
        return this.http.post("https://ecommerce-server-82px.onrender.com/api/products", product)
    }
    updateProduct(id, product) {
        return this.http.put("https://ecommerce-server-82px.onrender.com/api/products/" + id, product)
    }
    deleteProduct(id) {
        return this.http.delete("https://ecommerce-server-82px.onrender.com/api/products/" + id)
    }
    getProductsLowStock() {
        return this.http.get("https://ecommerce-server-82px.onrender.com/api/products/low-stock")
    }
}