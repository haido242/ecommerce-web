import { Component } from "@angular/core";
import { BaseComponent } from "@app/abstract/BaseComponent";


@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})

export class AdminComponent extends BaseComponent{

    title = 'Admin';

    constructor(){
        super();
    }
}