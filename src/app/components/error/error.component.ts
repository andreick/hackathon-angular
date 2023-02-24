import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ErrorService } from 'src/app/service/error/error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(
    private errorService: ErrorService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.errorService.error.subscribe((error) => this.showError(error))
  }

  private showError(error: string) {
    this.messageService.add({ severity: 'error', summary: 'Erro', detail: error, life: 3000 })
  }
}
