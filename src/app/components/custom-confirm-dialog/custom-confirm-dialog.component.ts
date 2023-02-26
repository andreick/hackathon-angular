import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-confirm-dialog',
  templateUrl: './custom-confirm-dialog.component.html',
  styleUrls: ['./custom-confirm-dialog.component.css']
})
export class CustomConfirmDialogComponent implements OnInit {

  @Input() header = 'Confirmação'
  @Input() icon = 'pi pi-exclamation-triangle'

  constructor() { }

  ngOnInit(): void {
  }

}
