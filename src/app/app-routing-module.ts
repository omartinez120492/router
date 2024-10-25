import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";

/*
 /: Laze Load
 /products
 /users
*/
const rutasPadre: Routes = [
  {
    path:'',
    component: AppComponent,
  },
  {
    path:'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
  },{
    path:'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule), 
  },
]

@NgModule({
  imports: [RouterModule.forRoot(rutasPadre)],
  exports: [RouterModule]   
})
export class AppRoutingModule { }