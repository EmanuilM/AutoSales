import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';
import { OwnerGuard } from '../shared/guards/owner.guard';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { CreateComponent } from './create/create.component'
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'offers',
    children: [
      {
        path: 'create',
        component: CreateComponent,
        canActivate:[AuthGuard],
        data : {
          isLogged : true,
        }
      },
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'edit/:id',
        component: EditComponent,
        canActivate:[OwnerGuard],
        data : {
          isLogged : true,
        }
      },
      {
        path: 'details/:id',
        component: DetailsComponent,
      },
      {
        path: 'advanced-search',
        component: AdvancedSearchComponent,
        canActivate:[AuthGuard],
        data : {
          isLogged : true,
        }
      },
     

    ]
  }
]

export const offersRoutingModule = RouterModule.forChild(routes);