import { Injectable } from '@angular/core';
import { UrlTree, CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanLoad {

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate([''])
      return false
    }
    return true
  }
}
