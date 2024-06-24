import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ClientComponent } from "./client.component";
import { ClientRoutingModule } from "./client-routing.module";
import { HomeClient } from "./home";
import { TopnavModule } from "./top-nav/module";
import { ProductCard } from "./components/card";
import { ShareModule } from "@app/share.module";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { CheckoutClient } from "./cart/checkout";
import { CartClient } from "./cart";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { PaypalBtn } from "./components/paypal-btn";
import { DetailClient } from "./detail";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { Success } from "./success";
import { Search } from "./search";
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ClientRoutingModule,
        TopnavModule,
        FormsModule,
        ReactiveFormsModule,
        ShareModule,
        NzDividerModule,
        NzTableModule,
        NzInputModule,
        NzButtonModule,
        NzInputNumberModule,
        NzIconModule,
        NzFormModule,
        NzRadioModule,
        NzSelectModule,
        NzPopconfirmModule,
    ],
    declarations: [
        ClientComponent,
        PaypalBtn,
        ProductCard,
        CartClient,
        CheckoutClient,
        HomeClient,
        DetailClient,
        Success,
        Search
    ],
    providers: [

    ],
})

export class ClientModule { }