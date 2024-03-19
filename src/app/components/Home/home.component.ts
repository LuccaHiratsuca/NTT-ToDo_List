import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/interfaces/task';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newTask: Task = { title: '', description: '', done: false };
  editableTask: Task = { title: '', description: '', done: false };
  editingIndex: number = -1; // To track which task is being edited

  // Access the modal element
  @ViewChild('updateModal') updateModal!: ElementRef;


  constructor(public tasksService: TasksService, private renderer: Renderer2) { }

  ngOnInit(): void {
  }
  

  addTask() {
    if (!this.newTask.title) return;
    this.tasksService.addTask({ ...this.newTask });
    this.newTask = { title: '', description: '', done: false }; // Reset new task input
  }

  openUpdateModal(task: Task, index: number) {
    this.editableTask = { ...task };
    this.editingIndex = index;
    this.showModal();
  }


  toggleDone(index: number) {
    this.tasksService.toggleDone(index);
  }

  updateTask() {
    if (this.editingIndex !== -1) {
      this.tasksService.updateTask(this.editingIndex, this.editableTask);
      this.hideModal();
    }
  }

  private showModal() {
    this.renderer.addClass(this.updateModal.nativeElement, 'show');
    this.renderer.setStyle(this.updateModal.nativeElement, 'display', 'block');
    this.renderer.setAttribute(this.updateModal.nativeElement, 'aria-hidden', 'false');
    this.renderer.setAttribute(this.updateModal.nativeElement, 'aria-modal', 'true');
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  public hideModal() {
    this.renderer.removeClass(this.updateModal.nativeElement, 'show');
    this.renderer.removeStyle(this.updateModal.nativeElement, 'display');
    this.renderer.setAttribute(this.updateModal.nativeElement, 'aria-hidden', 'true');
    this.renderer.removeStyle(document.body, 'overflow');
  }
  

}
