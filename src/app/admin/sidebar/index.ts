import { Component } from "@angular/core";
import { BaseComponent } from "@app/abstract/BaseComponent";
import { sidebarMenu } from "./sidebar-menu";

@Component({
  selector: "sidebar",
  templateUrl: "./index.html",
  styleUrls: ["./index.scss"]
})

export class Sidebar extends BaseComponent{
  constructor() {
    super();
  }

  sidebarMenu = sidebarMenu;

}