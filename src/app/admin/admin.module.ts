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
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserDetail } from "./user/detail";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { FormModalProduct } from "./product/form-modal-product";
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { ShareModule } from "@app/share.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AdminRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NzButtonModule,
        NzLayoutModule,
        NzMenuModule,
        NzIconModule,
        NzImageModule,
        NzDividerModule,
        NzInputModule,
        NzTableModule,
        NzModalModule,
        NzFormModule,
        NzInputModule,
        NzSelectModule,
        NzMessageModule,
        NzDropDownModule,
        NzUploadModule,
        ShareModule,
        NzCheckboxModule
    ],
    declarations: [
        AdminComponent,
        HomeAdmin,
        Sidebar,
        Navbar,
        ProductManagement,
        OrderManagement,
        UserManagement,
        UserDetail,
        FormModalProduct
    ],
    providers: [],
})

export class AdminModule { }