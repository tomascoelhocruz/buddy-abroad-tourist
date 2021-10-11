import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchbylocationPageRoutingModule } from './searchbylocation-routing.module';

import { SearchbylocationPage } from './searchbylocation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchbylocationPageRoutingModule
  ],
  declarations: [SearchbylocationPage]
})
export class SearchbylocationPageModule {}
