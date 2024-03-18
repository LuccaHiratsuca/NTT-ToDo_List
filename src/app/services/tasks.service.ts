import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[] = [
    {
      title: 'First Task',
      description: 'This is the first task'
    },
    {
      title: 'Second Task',
      description: 'This is the second task'
    },
    {
      title: 'Third Task',
      description: 'This is the third task'
    },
  ];
  constructor() { }

  deleteTask(index: number){
    this.tasks.splice(index, 1);
  }
  
}
