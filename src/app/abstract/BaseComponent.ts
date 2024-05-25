import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Directive, DoCheck, Injector, OnChanges, OnDestroy, OnInit } from "@angular/core";
import { getInjector } from "../services/injector";
import { Router } from "@angular/router";
import { AuthService } from "@app/services/auth.service";



@Directive()
export class BaseComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
    protected injector : Injector;
    protected router : Router;
    protected auth : AuthService
    constructor(protected activatedRoute: Router = null) {
        this.injector = getInjector();
        this.router = this.injector.get(Router);
        this.auth = this.injector.get(AuthService);
     }
    
     isLoggedIn() {
        return this.auth.isLoggedIn();
    }

    getCurrentUser() {
        return this.auth.getCurrentUser();
    }

    getCurrentPage() {
        return this.router.url;
    }
    
    ngOnInit(): void {
        
    }

    ngOnChanges(): void {
        
    }

    ngOnDestroy(): void {
        
    }

    ngDoCheck(): void {
        
    }

    ngAfterContentInit(): void {
        
    }

    ngAfterContentChecked(): void {
        
    }

    ngAfterViewInit(): void {
        
    }

    ngAfterViewChecked(): void {
        
    }
}