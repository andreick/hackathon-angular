import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { GlobalToastService } from '../global-toast/global-toast.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalHttpInterceptorService implements HttpInterceptor {

  constructor(private globalToastService: GlobalToastService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
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
