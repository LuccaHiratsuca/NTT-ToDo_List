import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[] = [
    {
      title: 'First Task',
      description: 'This is the first task',
      done: false
    },
    {
      title: 'Second Task',
      description: 'This is the second task',
      done: false
    },
    {
      title: 'Third Task',
      description: 'This is the third task',
      done: false
    },
  ];

  constructor() { }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  updateTask(index: number, task: Task) {
    this.tasks[index] = task;
  }

  toggleDone(index: number) {
    this.tasks[index].done = !this.tasks[index].done;
  }
}
