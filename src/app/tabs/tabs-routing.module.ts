import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../guards/auth.guard";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "eventos",
        loadChildren: () =>
          import("../pages/event-list/event-list.module").then(
            (m) => m.EventListPageModule
          ),
      },
      {
        path: "buscar",
        loadChildren: () =>
          import("../pages/search-events/search-events.module").then(
            (m) => m.SearchEventsPageModule
          ),
      },
      {
        path: "cuenta",
        loadChildren: () =>
          import("../pages/account/account.module").then(
            (m) => m.AccountPageModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: "recuperar-cuenta",
        loadChildren: () =>
          import(
            "../pages/send-mail-restore-password/send-mail-restore-password.module"
          ).then((m) => m.SendMailRestorePasswordPageModule),
      },
      {
        path: "",
        redirectTo: "/eventos",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
