import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { HomeAdmin } from "./home";
import { Sidebar } from "./sidebar";
import { Navbar } from "./navbar";
import { ProductManagement } from "./product";
import { OrderManagement } from "./order";
import { UserManagement } from "./user";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AdminRoutingModule,
        NzButtonModule,
        NzLayoutModule,
        NzMenuModule,
        NzIconModule,
        NzImageModule,
        NzDividerModule,
        NzInputModule
    ],
    declarations: [
        AdminComponent,
        HomeAdmin,
        Sidebar,
        Navbar,
        ProductManagement,
        OrderManagement,
        UserManagement
    ],
    providers: [],
})

export class AdminModule { }