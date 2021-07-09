import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component'
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { TestComponent } from './test/test.component';

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
        path: 'details',
        component: DetailsComponent,
      },
      {
        path: 'test',
        component: TestComponent,
      }

    ]
  }
]

export const offersRoutingModule = RouterModule.forChild(routes);