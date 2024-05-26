import { Component } from "@angular/core";
import { BaseComponent } from "@app/abstract/BaseComponent";
import { Const } from "@app/const/Const";

@Component({
  selector: "sidebar",
  templateUrl: "./index.html",
  styleUrls: ["./index.scss"]
})

export class Sidebar extends BaseComponent{
  constructor() {
    super();
  }
  ngOnInit(): void {
    super.ngOnInit();
    console.log('Sidebar Component', this.sidebarMenu);
  }

  sidebarMenu = Const.sidebarMenu;

}