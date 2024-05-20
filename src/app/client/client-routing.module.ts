import { RouterModule, Routes } from "@angular/router";
import { ClientComponent } from "./client.component";
import { NgModule } from "@angular/core";
import { HomeClient } from "./home";


const clientRoutes: Routes = [
    {
        path: '',
        component: ClientComponent,
        children: [
        {
            path: 'home',
            component: HomeClient
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
    imports: [RouterModule.forRoot(clientRoutes)],
    exports: [RouterModule]
})
export class ClientRoutingModule { }