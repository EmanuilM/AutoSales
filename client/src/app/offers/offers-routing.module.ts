import { RouterModule, Routes } from '@angular/router';
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
      },
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'edit',
        component: EditComponent,
      },
      {
        path: 'details/:id',
        component: DetailsComponent,
      },

    ]
  }
]

export const offersRoutingModule = RouterModule.forChild(routes);