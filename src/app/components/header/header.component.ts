import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  login$ = this.authService.login;

  items!: MenuItem[]

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['home'] },
      { label: 'Usuários', icon: 'pi pi-fw pi-user', routerLink: ['usuarios'] }
    ]
  }

}
