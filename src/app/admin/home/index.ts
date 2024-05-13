import { Component } from "@angular/core";
import { BaseComponent } from "@app/abstract/BaseComponent";


@Component({
    selector: 'home-admin',
    templateUrl: './index.html',
    styleUrls: ['./style.scss']
})

export class HomeAdmin extends BaseComponent{
    constructor() {
        super();
    }
    

}