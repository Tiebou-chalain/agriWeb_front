import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandesComponent } from './commandes/commandes.component';
import { HistoriqueComponent } from './historique/historique.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabacheteur',
    pathMatch: 'full'
  },
  {
    path: 'tabacheteur',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'commande',
        component: CommandesComponent
      },
      {
        path: 'historique',
        component: HistoriqueComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcheteurPageRoutingModule {}
