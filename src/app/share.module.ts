import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormatMoney } from "./pipe/formatMoney";
import { UtcToLocalPipe } from "@app/pipe/formatTimeLocal";


@NgModule({
    imports: [CommonModule],
    declarations: [FormatMoney, UtcToLocalPipe],
    providers: [],
    exports: [FormatMoney, UtcToLocalPipe]
})
export class ShareModule { }