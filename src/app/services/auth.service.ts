import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Injectable(
    {
        providedIn: "root"
    }

)
export class AuthService {
    constructor(private router: Router, private http : HttpClient, ) {
        
     }
    login(email: string, password: string) {
        return this.http.post("http://localhost:3000/api/login", { email, password }, { observe: 'response' }).subscribe(
            (response: any) => {
                // handle success
                const token = response.token;
                localStorage.setItem("token", token);
                
            },
            (error: any) => {
                // handle error
                console.error(error);
                // handle error message and display to user
            }
        );
    }
    isLoggedIn() {
        return !!localStorage.getItem("token");
    }

    ngOnInit(): void {
    }
    logout() {
        this.router.navigate(["/"]);
    }
}