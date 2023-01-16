import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendMailRestorePasswordPageRoutingModule } from './send-mail-restore-password-routing.module';

import { SendMailRestorePasswordPage } from './send-mail-restore-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendMailRestorePasswordPageRoutingModule
  ],
  declarations: [SendMailRestorePasswordPage]
})
export class SendMailRestorePasswordPageModule {}