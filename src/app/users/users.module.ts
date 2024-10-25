import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';


@NgModule({
  declarations: [
    UsersComponent,
    CreatePageComponent,
    EditPageComponent,
    HomeLayoutComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
