import { RouterModule, Routes } from "@angular/router";
import { ClientComponent } from "./client.component";
import { NgModule } from "@angular/core";
import { HomeClient } from "./home";
import { CartClient } from "./cart";
import { CheckoutClient } from "./cart/checkout";
import { DetailClient } from "./detail";
import { Search } from "./search";
import { MyOrder } from "./order";


const clientRoutes: Routes = [
    {
        path: 'shop',
        component: ClientComponent,
        children: [
        {
            path: 'home',
            component: HomeClient
        },
        {
            path: 'cart',
            component: CartClient,
        },
        {
            path: 'order',
            component: MyOrder,
        },
        {
            path: 'search',
            component: Search
        },
        {
            path: 'cart/checkout',
            component: CheckoutClient
        },
        {
            path: 'product/:id',
            component: DetailClient
        },
        {
            path: '**',
            redirectTo: 'home'
        }
        // {
        //     path: 'profile',
        //     component: ProfileComponent
        // },
        // {
        //     path: 'settings',
        //     component: SettingsComponent
        // }
        ]
    }
    ];

@NgModule({
    imports: [RouterModule.forChild(clientRoutes)],
    exports: [RouterModule]
})
export class ClientRoutingModule { }