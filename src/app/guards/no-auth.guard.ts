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
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root",
})
export class NoAuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isAuthenticate().pipe(
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
    return this.authService.isAuthenticate().pipe(
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
