import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PocRoutingModule } from './poc-routing.module';
import { PocComponent } from './poc.component';
import { AlertComponent } from './alert/alert.component';
import { ChartsComponent } from './charts/charts.component';
import { NotificationComponent } from './notification/notification.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { ObservableExamplesComponent } from './observable-examples/observable-examples.component';
import { ReactiveFormExamplesComponent } from './reactive-form-examples/reactive-form-examples.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApiIntegrationComponent } from './api-integration/api-integration.component';
import { WidgetModule } from 'src/app/widget/widget.module';

@NgModule({
  declarations: [
    PocComponent,
    AlertComponent,
    ChartsComponent,
    NotificationComponent,
    GoogleMapComponent,
    ObservableExamplesComponent,
    ReactiveFormExamplesComponent,
    TemplateDrivenFormComponent,
    ApiIntegrationComponent
  ],
  imports: [
    CommonModule,
    PocRoutingModule,
    SharedModule,
    WidgetModule
  ]
})
export class PocModule { }
