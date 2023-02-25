import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ErrorMessageService } from 'src/app/service/error-message/error-message.service';

@Component({
  selector: 'app-error-toast',
  templateUrl: './error-toast.component.html',
  styleUrls: ['./error-toast.component.css']
})
export class ErrorToastComponent implements OnInit {

  constructor(
    private errorMessageService: ErrorMessageService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.errorMessageService.error.subscribe((error) => this.showError(error))
  }

  private showError(error: string) {
    this.messageService.add({ key: 'error', severity: 'error', summary: 'Erro', detail: error, life: 3000 })
  }
}
