import {RouterModule , Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes : Routes = [
    {
      path: 'auth',
      children: [
          {
              path:'login',
              component:LoginComponent,
          },
          {
              path:'register',
              component:RegisterComponent,
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
           
        ]
    }
]

export const userRoutingModule = RouterModule.forChild(routes);