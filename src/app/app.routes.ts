import { Routes } from '@angular/router';
import { TableComponent } from './features/table/table.component';
import { TestComponent } from './features/test/test.component';
import { OperatorsComponent } from './features/operators/operators.component';
import { BehaviorSubject } from 'rxjs';

export const routes: Routes = [
    {
        path:'',component:TableComponent
        
    },
    {
        path:'test',component:TestComponent
    },
    {
        path:'operators',component:OperatorsComponent
    },
    {
        path:'behavior',component:BehaviorSubject
    }

];
