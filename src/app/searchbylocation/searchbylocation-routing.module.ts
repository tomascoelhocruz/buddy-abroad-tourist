import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchbylocationPage } from './searchbylocation.page';

const routes: Routes = [
  {
    path: '',
    component: SearchbylocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchbylocationPageRoutingModule {}
