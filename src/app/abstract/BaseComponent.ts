import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Directive, DoCheck, Injector, OnChanges, OnDestroy, OnInit } from "@angular/core";
import { getInjector } from "../services/injector";
import { Router } from "@angular/router";



@Directive()
export class BaseComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
    protected injector : Injector;
    protected router : Router
    constructor(protected activatedRoute: Router = null) {
        this.injector = getInjector();
        this.router = this.injector.get(Router);
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