import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MapComponent } from 'view/map';
import { ListComponent } from 'view/list'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'map',
    pathMatch: 'full',
  },
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
