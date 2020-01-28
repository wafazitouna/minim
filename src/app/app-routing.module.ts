import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  { path: '', loadChildren: ('./modules/pages/pages.module#PagesModule') },
  { path: '**', redirectTo: '/404' }
]


export const AppRoutingModule : ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
