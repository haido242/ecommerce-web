import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Const } from "@app/const/Const"



@Injectable({
    providedIn: 'root'
    })
export class ProductService {
    constructor(private http: HttpClient) {
    }

    baseUrl = Const.backendUrl;

    getProducts(params?) {
        return this.http.get(`${this.baseUrl}/api/products`, { params })
    }
    getProductsByIds(ids) {
        const params = { ids : ids.join(",") }
        return this.http.get(`${this.baseUrl}/api/products/getByArray`, { params })
    }
    getProductById(id) {
        return this.http.get(`${this.baseUrl}/api/products/${id}`)
    }
    createProduct(product) {
        return this.http.post(`${this.baseUrl}/api/products`, product)
    }
    updateProduct(id, product) {
        return this.http.put(`${this.baseUrl}/api/products/${id}`, product)
    }
    deleteProduct(id) {
        return this.http.delete(`${this.baseUrl}/api/products/${id}`)
    }
    getProductsLowStock() {
        return this.http.get(`${this.baseUrl}/api/products/low-stock`)
    }
}