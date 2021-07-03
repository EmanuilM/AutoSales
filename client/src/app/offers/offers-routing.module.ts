import {RouterModule , Routes} from '@angular/router';
import {CreateComponent} from './create/create.component'

const routes : Routes = [
    {
      path: 'offers',
      children: [
          {
              path:'create',
              component : CreateComponent
          },
          
      ]
    }
]

export const offersRoutingModule = RouterModule.forChild(routes);