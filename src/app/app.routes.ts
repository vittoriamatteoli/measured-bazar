import { Routes } from '@angular/router';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Dashboard',
    component: DashboardComponent,
  },
  {
    path: 'users',
    title: 'Users',
    component: UsersComponent,
  },
];
