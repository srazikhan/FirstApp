import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WidgetModule } from 'src/app/widget/widget.module';


@NgModule({
  declarations: [
    BlogsComponent,
    BlogDetailsComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    SharedModule,
    WidgetModule
  ]
})
export class BlogsModule { }
