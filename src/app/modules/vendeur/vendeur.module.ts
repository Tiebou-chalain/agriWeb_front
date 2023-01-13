import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { VendeurPageRoutingModule } from './vendeur-routing.module';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from '../shared/nav-bar-vendeur/nav-bar.component';

import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import {HTTP_INTERCEPTORS, HttpClientModule, HttpClient} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { VendeurComponent } from './vendeur.component';
import { ArticleComponent } from './article/article.component';
import { HistoriqueComponent } from './historique/historique.component';
import { CommandeComponent } from './commande/commande.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendeurPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [HomeComponent,ArticleComponent,HistoriqueComponent,CommandeComponent,ProfileComponent,NavBarComponent,VendeurComponent ],
  providers: [
    HttpClient,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }]
})
export class VendeurPageModule {}
