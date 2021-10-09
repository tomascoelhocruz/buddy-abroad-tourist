import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchToursPage } from './search-tours.page';

const routes: Routes = [
  {
    path: '',
    component: SearchToursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchToursPageRoutingModule {}
