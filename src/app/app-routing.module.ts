import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ChartsComponent } from './components/charts/charts.component';
import { EnquiryComponent } from './components/enquiry/enquiry.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { HomeComponent } from './components/home/home.component';
import { NotificationComponent } from './components/notification/notification.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PocComponent } from './components/poc/poc.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "enquiry", component: EnquiryComponent },
  { path: "products", component: ProductsComponent },
  { path: "blogs/:id/:blogName", component: BlogsComponent },
  { path: "blog-details", component: BlogDetailsComponent },
  {
    path: "poc",component:PocComponent, children: [
      { path: "", component: ChartsComponent },
      { path: "charts", component: ChartsComponent },
      { path: "notification", component: NotificationComponent },
      { path: "google-map", component: GoogleMapComponent },
    ]
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
