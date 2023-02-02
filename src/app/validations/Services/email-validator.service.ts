import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from "@angular/forms";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
// import { AuthService } from "src/app/modules/auth/services/auth.service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class EmailValidatorService implements AsyncValidator {
  url = environment.url;

  // constructor(private authService: AuthService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    throw new Error("Method not implemented.");
    /* const email = control.value;
    return this.authService.getUserByEmail(email).pipe(
      map((user) => {
        if (!user?.email || this.authService.getAuthUser.email === user?.email)
          return null;

        return { exists_email: true };
      })
    ); */
  }
}
