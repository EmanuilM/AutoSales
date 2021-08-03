import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../core/not-found/not-found.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { OwnerGuard } from '../shared/guards/owner.guard';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/404"
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthGuard],
        data: {
            isLogged: false,
        }
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AuthGuard],
        data: {
            isLogged: false,
        }
    },

    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
        data: {
            isLogged: true,
        }

    },
    {
        path: 'edit/profile/:id',
        component: EditProfileComponent,
        canActivate: [AuthGuard],
        data: {
            isLogged: true,
        }
       
    },

]

export const userRoutingModule = RouterModule.forChild(routes);