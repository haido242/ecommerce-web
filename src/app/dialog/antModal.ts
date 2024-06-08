import { Injectable } from "@angular/core";
import { NzModalService } from "ng-zorro-antd/modal";

@Injectable({
  providedIn: 'root'
})

export class ModalService {
  constructor(private modal: NzModalService) {}

  public openModalWithSize(component: any, data: object, title: string, width: number, onOk: () => void, onCancel?: () => void): void {
    this.modal.create({
      nzContent: component,
      nzTitle: title,
      nzClosable: true,
      nzMaskClosable: false,
      nzWidth: width,
      nzOnOk: onOk,
      nzOnCancel: onCancel,
      nzData: data
    });
  }

  public openModalConfirm(title: string, content: string, onOk: () => void, onCancel?: () => void): void {
    this.modal.confirm({
      nzTitle: title,
      nzContent: content,
      nzOnOk: onOk,
      nzOnCancel: onCancel
    });
  }
}