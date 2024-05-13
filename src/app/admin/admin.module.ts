import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { HomeAdmin } from "./home";


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent,
        HomeAdmin
    ],
    providers: [],
})

export class AdminModule { }