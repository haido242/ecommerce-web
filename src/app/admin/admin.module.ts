import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { HomeAdmin } from "./home";
import { Sidebar } from "./sidebar";
import { Navbar } from "./navbar";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AdminRoutingModule,
        NzButtonModule,
        NzLayoutModule,
        NzMenuModule,
        NzIconModule
    ],
    declarations: [
        AdminComponent,
        HomeAdmin,
        Sidebar,
        Navbar
    ],
    providers: [],
})

export class AdminModule { }