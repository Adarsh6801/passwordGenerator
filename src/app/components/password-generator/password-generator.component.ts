import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ClipboardService } from 'ngx-clipboard'

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks: Subtask[];
}
interface Subtask {
  name: string;
  completed: boolean;
  color: string;
}
@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss']
})
export class PasswordGeneratorComponent {
  constructor(private _clipboardService: ClipboardService){}
  isCopied:boolean=false;
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

includeUppercase: boolean = false;
includeLowercase: boolean = false;
includeNumbers: boolean = false;
includeSpecialChars: boolean = false;

passwordLength!:number;
password!:string;
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

  generatePassword(){
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+-={}[]|:;"<>,.?/~';
    this.checkOptions()
    let charsToUse = '';
    if (this.includeLowercase) {
      charsToUse += lowercaseChars;
    }
    if (this.includeUppercase) {
      charsToUse += uppercaseChars;
    }
    if (this.includeNumbers) {
      charsToUse += numberChars;
    }
    if (this.includeSpecialChars) {
      charsToUse += specialChars;
    }

    console.log(this.passwordLength,'passlen');
    
    let generatedPassword = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charsToUse.length);
      generatedPassword += charsToUse[randomIndex];
    }
    this.password=generatedPassword;
    console.log(this.password);
    
  }

  receiveData(data: number) {
    this.passwordLength = data;
    this.passwordLength=Math.ceil(this.passwordLength/4)
  }

  checkOptions(){
    if(this.task){
      for (const subtask of this.task.subtasks) {
        if (subtask.completed) {
          switch (subtask.name) {
            case 'ABCD...':
              this.includeUppercase = true;
              break;
            case 'abcd...':
              this.includeLowercase = true;
              break;
            case '1234...':
              this.includeNumbers = true;
              break;
            case '!@#....':
              this.includeSpecialChars = true;
              break;
            default:
              break;
          }
        }
      }
    }

  }
}
