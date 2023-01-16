import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { NoAuthGuard } from "./guards/no-auth.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canLoad:[NoAuthGuard]
  },
  {
    path: "**",
    redirectTo: "",
  }
/*   {
    path: 'send-mail-restore-password',
    loadChildren: () => import('./pages/send-mail-restore-password/send-mail-restore-password.module').then( m => m.SendMailRestorePasswordPageModule)
  }, */
/*   {
    path: 'restore-password',
    loadChildren: () => import('./pages/restore-password/restore-password.module').then( m => m.RestorePasswordPageModule)
  }, */
  /*   {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
  } */
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
