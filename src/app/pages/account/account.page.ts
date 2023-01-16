import { Component, OnInit } from "@angular/core";
import { LoginService } from "../login/login.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.page.html",
  styleUrls: ["./account.page.scss"],
})
export class AccountPage implements OnInit {
  get authUser() {
    return this.loginService.getAuthUser;
  }

  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  logout() {
    this.loginService.logout();
  }
}
