import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss']
})
export class PasswordStrengthComponent {
  color: ThemePalette = 'accent';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;
  progressColor!: string;
  addValue!:number;

  getColorByValue(): string {
    if(this.value<1){
      this.value=1
    }
    this.addValue= Math.round(this.value/4)
    if (this.value < 30) {
      return 'primary'; // Green color for low progress
    } else if (this.value >= 30 && this.value < 70) {
      return 'accent'; // Yellow color for medium progress
    } else {
      return 'warn'; // Red color for high progress
    }
  }



  strength():string{
    if (this.value < 30) {
      return 'Week'; // Green color for low progress
    } else if (this.value >= 30 && this.value < 70) {
      return 'Medium'; // Yellow color for medium progress
    } else {
      return 'Strong'; // Red color for high progress
    }
  }
  textColor(): string {
    if (this.value < 30) {
      return 'text-green';
    } else if (this.value >= 30 && this.value < 70) {
      return 'text-warning';
    } else {
      return 'text-red';
    }
  }

}
