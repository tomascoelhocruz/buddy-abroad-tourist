import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchBuddyPage } from './search-buddy.page';

const routes: Routes = [
  {
    path: '',
    component: SearchBuddyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchBuddyPageRoutingModule {}
