import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Directive, DoCheck, Injector, OnChanges, OnDestroy, OnInit } from "@angular/core";
import { getInjector } from "../services/injector";
import { Router } from "@angular/router";
import { AuthService } from "@app/services/auth.service";
import { Const } from "@app/const/Const";



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

    hilightsidebarMenu() {
        const currentPage = this.getCurrentPage();
        const sidebarMenu = Const.sidebarMenu;
        sidebarMenu.forEach((menu) => {
            if (menu.routerLink === currentPage) {
                menu.hilight = true;
            } else {
                menu.hilight = false;
            }
        });
        return sidebarMenu;
    }
    
    getCurrentPage() {
        return this.router.url;
    }
    
    ngOnInit(): void {
        this.hilightsidebarMenu();
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