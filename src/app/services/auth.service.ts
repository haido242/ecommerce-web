import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import {jwtDecode} from "jwt-decode";
import { Const } from '@app/const/Const';

@Injectable(
    {
        providedIn: "root"
    }

)
export class AuthService {
    constructor(private router: Router, private http : HttpClient) {
        
     }
     baseUrl = Const.backendUrl + "/api/";
    login(email: string, password: string) {
        return this.http.post(this.baseUrl+"login", { email, password })

    }
    loginSuccess(data) {
        localStorage.setItem("token", data.data.token);
        data.data.role === "admin" ? this.router.navigate(["/admin"]) : this.router.navigate(["/client"]);
    }
    register(data) {
        return this.http.post(this.baseUrl +"signup", data);
    }
    registerSuccess() {
        this.router.navigate(["/login"]);
    }
    isLoggedIn() {
        return !!localStorage.getItem("token");
    }
    getCurrentUser() {
        const token = localStorage.getItem("token");
        if (!token) return null;
        const decodedToken = jwtDecode(token);
        return decodedToken;
    }
    getHeaders() {
        return {
            'Authorization': + localStorage.getItem("token")
        }
    }
    ngOnInit(): void {
    }
    logout() {
        localStorage.removeItem("token");
        this.router.navigate(["/login"]);
    }
}