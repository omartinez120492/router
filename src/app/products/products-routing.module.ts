import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatePageComponent } from './pages/create-page/create-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
//import { ProductsComponent } from './products.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: 'create',
        component: CreatePageComponent,
      },
      {
        path: 'edit/:id', 
        component: EditPageComponent,
      },{
        path: 'list',
        component: ListPageComponent,
      },
      { path: '**', redirectTo: '' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
