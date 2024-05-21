import { RouterModule, Routes } from "@angular/router";
import { ClientComponent } from "./client.component";
import { NgModule } from "@angular/core";
import { HomeClient } from "./home";


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