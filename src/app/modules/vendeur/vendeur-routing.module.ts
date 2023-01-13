import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { CommandeComponent } from './commande/commande.component';
import { HistoriqueComponent } from './historique/historique.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { VendeurComponent } from './vendeur.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabvendeur',
    pathMatch: 'full'
  },
  {
    path: 'tabvendeur',
    component: VendeurComponent,
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
        path: 'article',
        component: ArticleComponent
      },
      {
        path: 'commande',
        component: CommandeComponent
      },
      {
        path: 'historique',
        component: HistoriqueComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendeurPageRoutingModule {}
