import { Injector } from "@angular/core";


let appInjector : Injector;

export function setInjector(injector: Injector) {
    appInjector = injector;
}

export function getInjector() {
    return appInjector;
}