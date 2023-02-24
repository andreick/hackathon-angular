import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  items!: MenuItem[]

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['home'] },
      { label: 'Usuários', icon: 'pi pi-fw pi-user', routerLink: ['usuarios'] }
    ]
  }

}
