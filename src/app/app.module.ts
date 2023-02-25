import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConfirmationService } from 'primeng/api';

import { GlobalHttpInterceptorService } from './service/interceptor/global-http-interceptor.service';
import { GlobalToastModule } from './components/global-toast/global-toast.module';
import { HeaderModule } from './components/header/header.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    GlobalToastModule,
    HeaderModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptorService, multi: true }, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
