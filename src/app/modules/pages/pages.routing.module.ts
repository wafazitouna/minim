import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes =[
    {
        path:'',
        component: HomeComponent
    },
    {
        path: 'shop',
        component: ShopComponent
    },
    {
        path: '404',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }