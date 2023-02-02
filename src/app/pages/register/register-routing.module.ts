import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NoAuthGuard } from "src/app/guards/no-auth.guard";
import { VerifyRegisterComponent } from "./components/verify-register/verify-register.component";

import { RegisterPage } from "./register.page";

const routes: Routes = [
  {
    path: "",
    component: RegisterPage,
    canActivate: [NoAuthGuard],
  },
  {
    path: "verificacion/:token",
    component:VerifyRegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPageRoutingModule {}
