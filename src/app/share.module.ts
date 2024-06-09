import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormatMoney } from "./pipe/formatMoney";



@NgModule({
    imports: [CommonModule],
    declarations: [FormatMoney],
    providers: [],
    exports: [FormatMoney]
})
export class ShareModule { }