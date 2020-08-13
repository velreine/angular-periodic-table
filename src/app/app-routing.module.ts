import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeriodicTableComponent } from './periodic-table/periodic-table.component';
import { ElementDetailComponent } from './element-detail/element-detail.component';

const routes: Routes = [
  { path: '', component: PeriodicTableComponent },
  { path: 'element/:atomicNumber', component: ElementDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
