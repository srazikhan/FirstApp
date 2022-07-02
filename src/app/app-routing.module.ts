import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { EnquiryComponent } from './components/enquiry/enquiry.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './core/guards/auth.guard';
import { Auth2Guard } from './core/guards/auth2.guard';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "enquiry", component: EnquiryComponent },

  { path: 'poc', loadChildren: () => import('./features/poc/poc.module').then(m => m.PocModule), canActivate:[AuthGuard], canActivateChild:[Auth2Guard] },
  { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'blogs', loadChildren: () => import('./features/blogs/blogs.module').then(m => m.BlogsModule) },
  { path: 'products', loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule) },
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
