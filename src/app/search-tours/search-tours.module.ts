import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchToursPageRoutingModule } from './search-tours-routing.module';

import { SearchToursPage } from './search-tours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchToursPageRoutingModule
  ],
  declarations: [SearchToursPage]
})
export class SearchToursPageModule {}
