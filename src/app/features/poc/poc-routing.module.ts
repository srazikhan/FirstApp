import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { PocComponent } from './poc.component';

const routes: Routes = [
  { path: '', component: PocComponent },
  { path: 'alert', component: AlertComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PocRoutingModule { }
