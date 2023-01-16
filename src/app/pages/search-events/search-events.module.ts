import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchEventsPageRoutingModule } from './search-events-routing.module';

import { SearchEventsPage } from './search-events.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchEventsPageRoutingModule
  ],
  declarations: [SearchEventsPage]
})
export class SearchEventsPageModule {}
