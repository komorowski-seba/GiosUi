import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MapComponent } from './view/map/map.component';
import { ListComponent } from './view/list/list.component';


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
