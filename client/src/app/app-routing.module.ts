import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    component: HomeComponent, 
  },
  {
    path : 'offers',
    loadChildren : () => import('./offers/offers.module').then(m => m.OffersModule),
  },
  {
    path : 'user',
    loadChildren : () => import('./user/user.module').then(m => m.UserModule),
  },
 
  {
    path: '**',
    redirectTo : '/404',
  },
  {
    path : '404',
    component : NotFoundComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
