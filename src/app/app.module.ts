import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './core/services/auth.service';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { EnquiryComponent } from './components/enquiry/enquiry.component';
import { ProductsComponent } from './components/products/products.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { AddNameTitlePipe } from './core/pipes/add-name-title.pipe';
import { ProductService } from './core/services/product.service';
import { EnquiryDetailsComponent } from './components/enquiry-details/enquiry-details.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    EnquiryComponent,
    ProductsComponent,
    BlogsComponent,
    PageNotFoundComponent,
    AddNameTitlePipe,
    EnquiryDetailsComponent,
    BlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
