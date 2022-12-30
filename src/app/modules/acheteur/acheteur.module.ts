import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcheteurPageRoutingModule } from './acheteur-routing.module';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from '../shared/nav-bar-acheteur/nav-bar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcheteurPageRoutingModule
  ],
  declarations: [HomeComponent,NavBarComponent]
})
export class AcheteurPageModule {}
