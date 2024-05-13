import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { NgModule } from "@angular/core";


const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        // children: [
        // {
        //     path: 'dashboard',
        //     component: DashboardComponent
        // },
        // {
        //     path: 'profile',
        //     component: ProfileComponent
        // },
        // {
        //     path: 'settings',
        //     component: SettingsComponent
        // }
        // ]
    }
    ];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }