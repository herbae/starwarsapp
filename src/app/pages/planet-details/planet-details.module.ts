import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanetDetailsPageRoutingModule } from './planet-details-routing.module';

import { PlanetDetailsPage } from './planet-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanetDetailsPageRoutingModule
  ],
  declarations: [PlanetDetailsPage]
})
export class PlanetDetailsPageModule {}
