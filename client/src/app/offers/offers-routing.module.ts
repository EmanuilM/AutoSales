import {RouterModule , Routes} from '@angular/router';
import {CreateComponent} from './create/create.component'
import { ListComponent } from './list/list.component';

const routes : Routes = [
    {
      path: 'offers',
      children: [
          {
              path:'create',
              component : CreateComponent,
          },
          {
            path:'list',
            component : ListComponent,
        },
          
      ]
    }
]

export const offersRoutingModule = RouterModule.forChild(routes);