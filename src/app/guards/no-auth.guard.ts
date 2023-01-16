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
import { map, Observable, tap } from "rxjs";
import { LoginService } from "../pages/login/login.service";

@Injectable({
  providedIn: "root",
})
export class NoAuthGuard implements CanActivate, CanLoad {

  constructor(private loginService: LoginService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.loginService.isAuthenticate().pipe(
      tap((auth) => {
        if (auth) {
          this.router.navigateByUrl("/eventos");
        }
      }),
      map((value) => {
        return !value;
      })
    );
  }
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.loginService.isAuthenticate().pipe(
      tap((auth) => {
        if (auth) {
          this.router.navigateByUrl("/eventos");
        }
      }),
      map((value) => {
        return !value;
      })
    );
  }
}
