import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddNameTitlePipe } from 'src/app/core/pipes/add-name-title.pipe';
import { ChangeBgDirective } from 'src/app/core/directives/change-bg.directive';
import { WidgetModule } from 'src/app/widget/widget.module';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    WidgetModule
  ]
})
export class ProductsModule { }
