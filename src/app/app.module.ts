import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { ErrorComponent } from './components/error/error.component';

import { ToastModule } from 'primeng/toast';
import { TabMenuModule } from 'primeng/tabmenu';
import { MessageService, ConfirmationService } from 'primeng/api';

import { GlobalHttpInterceptorService } from './service/interceptor/global-http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastModule,
    TabMenuModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptorService, multi: true }, MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
