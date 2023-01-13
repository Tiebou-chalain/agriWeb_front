import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import {HTTP_INTERCEPTORS, HttpClientModule, HttpClient} from "@angular/common/http";

import { AcheteurPageRoutingModule } from './acheteur-routing.module';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from '../shared/nav-bar-acheteur/nav-bar.component';
import { RouteReuseStrategy } from '@angular/router';
import { AcheteurComponent } from './acheteur.component';
import { ProfileComponent } from './profile/profile.component';
import { HistoriqueComponent } from './historique/historique.component';
import { CommandesComponent } from './commandes/commandes.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcheteurPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    HttpClient,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  declarations: [HomeComponent,NavBarComponent,AcheteurComponent,ProfileComponent,HistoriqueComponent,CommandesComponent]
})
export class AcheteurPageModule {}
