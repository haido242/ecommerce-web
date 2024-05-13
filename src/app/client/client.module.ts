import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ClientComponent } from "./client.component";
import { ClientRoutingModule } from "./client-routing.module";
import { HomeClient } from "./home";


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ClientRoutingModule
    ],
    declarations: [
        ClientComponent,
        HomeClient
    ],
    providers: [],
})

export class ClientModule { }