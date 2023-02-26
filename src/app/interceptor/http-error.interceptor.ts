import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { GlobalToastService } from '../service/global-toast/global-toast.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private globalToastService: GlobalToastService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        console.error(error)
        if (error instanceof HttpErrorResponse) {
          this.globalToastService.showHttpError(error)
        }
        return throwError(error.message)
      })
    )
  }
}
