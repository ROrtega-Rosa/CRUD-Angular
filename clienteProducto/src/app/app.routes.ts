import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products/products.component';
import { ProductsFormComponent } from './products/products-form/products-form.component';

export const routes: Routes = [
    {
        path:"",
        component:ProductsComponent
    },
    {
        path:"products",
        component:ProductsComponent
    },
    {
        path:"products/new",
        component:ProductsFormComponent
    },
    {
        path:"products/:id",
        component:ProductsFormComponent

    }
];
