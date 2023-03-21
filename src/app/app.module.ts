import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WorksComponent } from './components/works/works.component';
import { CenzorComponent } from './components/works/cenzor/cenzor.component';
import { UserListComponent } from './components/works/user-list/user-list.component';
import { TaskListComponent } from './components/works/task-list/task-list.component';
import { TasktableComponent } from './components/works/task-list/tasktable/tasktable.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorksComponent,
    CenzorComponent,
    UserListComponent,
    TaskListComponent,
    TasktableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
