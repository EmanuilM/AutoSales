import {RouterModule , Routes} from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
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
            {
                path: 'edit/profile/:id',
                component : EditProfileComponent,
            },
           
        ]
    }
]

export const userRoutingModule = RouterModule.forChild(routes);