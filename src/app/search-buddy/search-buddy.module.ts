import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchBuddyPageRoutingModule } from './search-buddy-routing.module';

import { SearchBuddyPage } from './search-buddy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchBuddyPageRoutingModule
  ],
  declarations: [SearchBuddyPage]
})
export class SearchBuddyPageModule {}
