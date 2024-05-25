import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { TopnavComponent } from '.';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NzDropDownModule,
    NzBadgeModule,
    NzButtonModule,
    NzIconModule,
    NzGridModule,
    NzDrawerModule,
  ],
    declarations: [
        TopnavComponent
    ],
  exports: [TopnavComponent]
})
export class TopnavModule { }