import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';

import { GlobalToast } from 'src/app/service/global-toast/global-toast';
import { GlobalToastService } from 'src/app/service/global-toast/global-toast.service';

@Component({
  selector: 'app-global-toast',
  templateUrl: './global-toast.component.html',
  styleUrls: ['./global-toast.component.css']
})
export class GlobalToastComponent implements OnInit {

  constructor(
    private globalToastService: GlobalToastService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.globalToastService.toast.subscribe((toast) => this.showToast(toast))
  }

  private showToast(toast: GlobalToast) {
    this.messageService.add({ key: 'global', severity: toast.severity, summary: toast.summary, detail: toast.detail, life: toast.life })
  }
}
