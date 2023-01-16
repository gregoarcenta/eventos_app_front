import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from "@angular/router";
import { Observable, tap } from "rxjs";
import { LoginService } from "../pages/login/login.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.loginService.isAuthenticate().pipe(
      tap((valid) => {
        if (!valid) {
          this.router.navigateByUrl("/login");
        }
      })
    );
  }
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.loginService.isAuthenticate().pipe(
      tap((valid) => {
        if (!valid) {
          this.router.navigateByUrl("/login");
        }
      })
    );
  }
}
