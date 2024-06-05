import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { NgModule } from "@angular/core";
import { HomeAdmin } from "./home";
import { ProductManagement } from "./product";
import { OrderManagement } from "./order";
import { UserManagement } from "./user";
import { UserDetail } from "./user/detail";

const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
        {
            path: 'home',
            component: HomeAdmin
        },
        {
            path: 'product',
            component: ProductManagement
        },
        {
            path: 'order',
            component: OrderManagement
        },
        {
            path: 'user',
            component: UserManagement,
        },
        // path user detail
        {
            path: 'user/:id',
            component: UserDetail
        },
        {
            path: '**',
            redirectTo: 'home',
            pathMatch: 'full'
        }
        ]
    }
    ];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }