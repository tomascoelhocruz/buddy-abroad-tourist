import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomTourPage } from './custom-tour.page';

const routes: Routes = [
  {
    path: '',
    component: CustomTourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomTourPageRoutingModule {}
