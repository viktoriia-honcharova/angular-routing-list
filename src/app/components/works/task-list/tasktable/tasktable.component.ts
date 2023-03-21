import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasktable',
  templateUrl: './tasktable.component.html',
  styleUrls: ['./tasktable.component.css'],
})
export class TasktableComponent {
  @Input() tasks!: Array<{ title: string; status: boolean }>;

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
