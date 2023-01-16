import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, Observable, of, tap } from "rxjs";
import { ResponseUser, User } from "src/app/interfaces/User";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private authUser?: User;
  private url = environment.url;

  get getAuthUser() {
    return this.authUser;
  }

  set setAuthUser(user: User) {
    this.authUser = user;
  }

  constructor(private http: HttpClient, private router: Router) {}

  isAuthenticate(): Observable<boolean> {
    const token: string = localStorage.getItem("token") || "";

    let headers = new HttpHeaders().set("Content-Type", "application/json");
    if (token && this.authUser) return of(true);

    if (token) {
      headers = headers.set("authorization", `bearer ${token}`);
      return this.http
        .get<ResponseUser>(`${this.url}/login/renew`, {
          headers,
        })
        .pipe(
          map(({ data }) => {
            localStorage.setItem("token", data.jwt);
            this.authUser = data.user;
            return true;
          }),
          catchError(({ error }) => {
            this.logout();
            return of(false);
          })
        );
    }

    return of(false);
  }

  login(data: any): Observable<ResponseUser> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http
      .post<ResponseUser>(`${this.url}/login`, data, {
        headers,
      })
      .pipe(
        tap(({ data }) => {
          this.authUser = data.user;
          localStorage.setItem("token", data.jwt);
        })
      );
  }

  logout() {
    localStorage.removeItem("token");
    this.authUser = undefined;
    this.router.navigateByUrl("/login");
  }
}
