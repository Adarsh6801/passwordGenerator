import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
@Component({
  selector: 'app-password-options',
  templateUrl: './password-options.component.html',
  styleUrls: ['./password-options.component.scss']
})

export class PasswordOptionsComponent {

  task: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'ABCD...', completed: false, color: 'warn'},
      {name: 'abcd...', completed: false, color: 'warn'},
      {name: '1234...', completed: false, color: 'warn'},
      {name: '!@#....', completed: false, color: 'warn'},

    ],
}

allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
    
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
    
    
  }
}