import { Component } from "@angular/core";
import { BaseComponent } from "@app/abstract/BaseComponent";


@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss']
})

export class ClientComponent extends BaseComponent {
    title = 'Client';
}
