import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomTourPageRoutingModule } from './custom-tour-routing.module';

import { CustomTourPage } from './custom-tour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomTourPageRoutingModule
  ],
  declarations: [CustomTourPage]
})
export class CustomTourPageModule {}
