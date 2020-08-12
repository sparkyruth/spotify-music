import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { // default route => /home
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { // route => /home
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  { // route => /search
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule) 
  },
  { // route => /search/term
    path: 'search/:term',
    loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
