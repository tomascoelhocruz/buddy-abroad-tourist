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
  },
  {
    path: 'tour-detail',
    loadChildren: () => import('./tour-detail/tour-detail.module').then( m => m.TourDetailPageModule)
  },
  {
    path: 'buddy-profile',
    loadChildren: () => import('./buddy-profile/buddy-profile.module').then( m => m.BuddyProfilePageModule)
  },
  {
    path: 'match',
    loadChildren: () => import('./match/match.module').then( m => m.MatchPageModule)
  },
  {
    path: 'custom-tour',
    loadChildren: () => import('./custom-tour/custom-tour.module').then( m => m.CustomTourPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
