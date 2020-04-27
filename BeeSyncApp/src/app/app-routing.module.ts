import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './principal/charts/charts.component';

const routes: Routes = [
  {
    path:'',
    component: ChartsComponent
  },
  {
    path: 'dashboard',
    component: ChartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
