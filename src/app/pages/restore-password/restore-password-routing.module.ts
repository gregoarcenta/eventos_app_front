import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NoAuthGuard } from "src/app/guards/no-auth.guard";

import { RestorePasswordPage } from "./restore-password.page";

const routes: Routes = [
  {
    path: "",
    component: RestorePasswordPage,
    canActivate: [NoAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestorePasswordPageRoutingModule {}
