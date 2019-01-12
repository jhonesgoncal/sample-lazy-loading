import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},

  //lazy loading
  {path: 'produto', loadChildren: './produto/produto.module#ProdutoModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
