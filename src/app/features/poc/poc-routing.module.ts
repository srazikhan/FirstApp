import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { ApiIntegrationComponent } from './api-integration/api-integration.component';
import { ChartsComponent } from './charts/charts.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { NotificationComponent } from './notification/notification.component';
import { ObservableExamplesComponent } from './observable-examples/observable-examples.component';
import { PocComponent } from './poc.component';
import { ReactiveFormExamplesComponent } from './reactive-form-examples/reactive-form-examples.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  { path: "", component: PocComponent, children:[
    { path: "", component: ChartsComponent },
    { path: "charts", component: ChartsComponent },
    { path: 'alert', component: AlertComponent },
    { path: "notification", component: NotificationComponent },
    { path: "google-map", component: GoogleMapComponent },
    { path: "Observable", component: ObservableExamplesComponent },
    { path: "reactive-form", component: ReactiveFormExamplesComponent },
    { path: "template-driven-form", component: TemplateDrivenFormComponent },
    { path: "api-integration", component: ApiIntegrationComponent},
  ] },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PocRoutingModule { }
