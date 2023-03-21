import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  public tasks = [
    {
      title: 'HTML',
      status: false,
    },
  ];
  public task!: string;

  addTask(): void {
    this.tasks.push({
      title: this.task,
      status: false,
    });
    this.task = '';
  }
}
