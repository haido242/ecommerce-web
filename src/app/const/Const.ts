import { SidebarMenuItem } from "@app/admin/interfaces/interface";



export class Const {
    public static backendUrl = "http://localhost:3000";
    // public static backendUrl = "https://ecommerce-server-82px.onrender.com";

    public static sidebarMenu :Array< SidebarMenuItem> = [
        // {
        //     title: "Home",
        //     icon: "home",
        //     routerLink: "/admin/home",
        //     enabled: true,
        // },
        {
            title: "Product Management",
            icon: "shop",
            routerLink: "/admin/product",
            enabled: true,
        },
        {
            title: "Order Management",
            icon: "shopping",
            routerLink: "/admin/order",
            enabled: true,
        },
        {
            title: "Customer Management",
            icon: "user",
            routerLink: "/admin/user",
            enabled: true,
        },
    ];
    
}