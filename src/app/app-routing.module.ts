import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'acheteur',
    loadChildren: () => import('./modules/acheteur/acheteur.module').then( m => m.AcheteurPageModule)
  },
  {
    path: 'vendeur',
    loadChildren: () => import('./modules/vendeur/vendeur.module').then( m => m.VendeurPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then( m => m.AuthPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
