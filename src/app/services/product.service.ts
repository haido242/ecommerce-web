import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"



@Injectable({
    providedIn: 'root'
    })
export class ProductService {
    constructor(private http: HttpClient) {
    }
    getProducts() {
        return this.http.get("http://localhost:3000/api/products")
    }
    getProductById(id) {
        return this.http.get("http://localhost:3000/api/products/" + id)
    }
    createProduct(product) {
        return this.http.post("http://localhost:3000/api/products", product)
    }
    updateProduct(id, product) {
        return this.http.put("http://localhost:3000/api/products/" + id, product)
    }
    deleteProduct(id) {
        return this.http.delete("http://localhost:3000/api/products/" + id)
    }
    getProductsLowStock() {
        return this.http.get("http://localhost:3000/api/products/low-stock")
    }
}