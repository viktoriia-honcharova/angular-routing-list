import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { WorksComponent } from './components/works/works.component';
import { CenzorComponent } from './components/works/cenzor/cenzor.component';
import { UserListComponent } from './components/works/user-list/user-list.component';
import { TaskListComponent } from './components/works/task-list/task-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'works',
    component: WorksComponent,
    children: [
      { path: 'cenzor', component: CenzorComponent },
      { path: 'userlist', component: UserListComponent },
      { path: 'tasklist', component: TaskListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
