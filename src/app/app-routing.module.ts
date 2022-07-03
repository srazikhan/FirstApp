import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './core/guards/auth.guard';
import { Auth2Guard } from './core/guards/auth2.guard';

const routes: Routes = [
  { path: "", redirectTo: "auth", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  { path: "main", component: MainComponent, canActivate:[AuthGuard], children:[
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
    { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'blogs', loadChildren: () => import('./features/blogs/blogs.module').then(m => m.BlogsModule) },
    { path: 'products', loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule) },
    { path: 'poc', loadChildren: () => import('./features/poc/poc.module').then(m => m.PocModule), canActivate:[AuthGuard], canActivateChild:[Auth2Guard] },
  ]},
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
