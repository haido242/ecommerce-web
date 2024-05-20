import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { NgModule } from "@angular/core";
import { HomeAdmin } from "./home";


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
            path: '**',
            redirectTo: 'home',
            pathMatch: 'full'
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
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }