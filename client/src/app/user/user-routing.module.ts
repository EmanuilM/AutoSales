import {RouterModule , Routes} from '@angular/router';
import { NotFoundComponent } from '../core/not-found/not-found.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes : Routes = [

    {
      path: 'auth',
      canActivateChild : [AuthGuard],
      children: [
          {
              path:'login',
              component:LoginComponent,
              data : {
                  isLogged : false,
              }
          },
          {
              path:'register',
              component:RegisterComponent,
              data : {
                isLogged : false,
            }
          }
      ]
    },
    {
        path: 'user',
        children : [
            {
                path: 'profile',
                component : ProfileComponent,
            },
            {
                path: 'edit/profile/:id',
                component : EditProfileComponent,
            },
           
        ]
    },
]

export const userRoutingModule = RouterModule.forChild(routes);