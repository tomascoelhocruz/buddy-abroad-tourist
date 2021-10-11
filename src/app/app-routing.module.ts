import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'search-tours',
    loadChildren: () => import('./search-tours/search-tours.module').then( m => m.SearchToursPageModule)
  },
  {
    path: 'search-buddy',
    loadChildren: () => import('./search-buddy/search-buddy.module').then( m => m.SearchBuddyPageModule)
  },
  {
    path: 'search-book',
    loadChildren: () => import('./search-book/search-book.module').then( m => m.SearchBookPageModule)
  },
  {
    path: 'searchbylocation/:location',
    loadChildren: () => import('./searchbylocation/searchbylocation.module').then( m => m.SearchbylocationPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
