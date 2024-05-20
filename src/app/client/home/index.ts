import { Component } from "@angular/core";
import { BaseComponent } from "@app/abstract/BaseComponent";


@Component({
    selector: 'home-client',
    templateUrl: './index.html',
    styleUrls: ['./style.scss']
})

export class HomeClient extends BaseComponent {
    constructor() {
        super();
    }
    ngOnInit(): void {
        console.log("HomeClient");
    }

}