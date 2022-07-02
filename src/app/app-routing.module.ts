import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ChartsComponent } from './components/charts/charts.component';
import { EnquiryComponent } from './components/enquiry/enquiry.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { HomeComponent } from './components/home/home.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ObservableExamplesComponent } from './components/observable-examples/observable-examples.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PocComponent } from './components/poc/poc.component';
import { ProductsComponent } from './components/products/products.component';
import { ReactiveFormExamplesComponent } from './components/reactive-form-examples/reactive-form-examples.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { AuthGuard } from './core/guards/auth.guard';
import { Auth2Guard } from './core/guards/auth2.guard';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "enquiry", component: EnquiryComponent },
  { path: "products", component: ProductsComponent, canActivate:[AuthGuard] },
  { path: "blogs/:id/:blogName", component: BlogsComponent },
  { path: "blog-details", component: BlogDetailsComponent },
  {
    path: "poc",component:PocComponent, canActivate:[AuthGuard], canActivateChild:[Auth2Guard], children: [
      { path: "", component: ChartsComponent },
      { path: "charts", component: ChartsComponent },
      { path: "notification", component: NotificationComponent },
      { path: "google-map", component: GoogleMapComponent },
      { path: "Observable", component: ObservableExamplesComponent },
      { path: "reactive-form", component: ReactiveFormExamplesComponent },
      { path: "template-driven-form", component: TemplateDrivenFormComponent },
    ]
  },
  { path: 'poc-ex', loadChildren: () => import('./features/poc/poc.module').then(m => m.PocModule) },
  { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  // preloadingStrategy exaample
  // imports: [RouterModule.forRoot(routes,{
  //   preloadingStrategy:PreloadAllModules
  // })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
