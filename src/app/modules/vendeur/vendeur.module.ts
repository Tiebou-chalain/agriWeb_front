import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendeurPageRoutingModule } from './vendeur-routing.module';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from '../shared/nav-bar-vendeur/nav-bar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendeurPageRoutingModule
  ],
  declarations: [HomeComponent,NavBarComponent ]
})
export class VendeurPageModule {}
