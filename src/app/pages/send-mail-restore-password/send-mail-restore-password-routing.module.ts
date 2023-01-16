import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendMailRestorePasswordPage } from './send-mail-restore-password.page';

const routes: Routes = [
  {
    path: '',
    component: SendMailRestorePasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendMailRestorePasswordPageRoutingModule {}
