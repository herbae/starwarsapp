import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanetDetailsPage } from './planet-details.page';

const routes: Routes = [
  {
    path: '',
    component: PlanetDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanetDetailsPageRoutingModule {}
