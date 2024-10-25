import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { RouterModule } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';

@NgModule({
  declarations: [
    ProductsComponent,
    CreatePageComponent,
    EditPageComponent,
    HomeLayoutComponent,
    ListPageComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    RouterModule
  ],
  exports: [
    ProductsRoutingModule,
    RouterModule
  ]
})
export class ProductsModule { }
