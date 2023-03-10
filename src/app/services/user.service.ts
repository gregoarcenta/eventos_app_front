import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private url: string = environment.url;

  constructor(private http: HttpClient) {}

  getUserByEmail(email: string): Observable<boolean> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http
      .get<any>(`${this.url}/user/find-by-email/${email}`, { headers })
      .pipe(map(({ data }) => data.valid));
  }

  getUserByUsername(username: string): Observable<boolean> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http
      .get<any>(`${this.url}/user/find-by-username/${username}`, {
        headers,
      })
      .pipe(map(({ data }) => data.valid));
  }
}
