import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path:'',
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
        component: UsersComponent,
      },
      {
        path: '**',
        redirectTo: '',
      }
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

/*
  /: layout principal
  /create
  /edit/:id
*/

