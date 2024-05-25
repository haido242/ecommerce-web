import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ClientComponent } from "./client.component";
import { ClientRoutingModule } from "./client-routing.module";
import { HomeClient } from "./home";
import { TopnavModule } from "./top-nav/module";


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ClientRoutingModule,
        TopnavModule
    ],
    declarations: [
        ClientComponent,
        HomeClient
    ],
    providers: [],
})

export class ClientModule { }