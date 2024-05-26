import { Component } from "@angular/core";
import { BaseComponent } from "@app/abstract/BaseComponent";

@Component({
    selector: 'user-management',
    templateUrl: './index.html',
    styleUrls: ['./index.scss']
})

export class UserManagement extends BaseComponent{
    constructor() {
        super();
        console.log('User Management Component');
    }

    ngOnInit(): void {
        super.ngOnInit();
    }
}