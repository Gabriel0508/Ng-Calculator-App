import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorKeyboardComponent } from './calculator-keyboard.component';

@NgModule({
  declarations: [CalculatorKeyboardComponent],
  imports: [CommonModule],
  exports: [CalculatorKeyboardComponent],
})
export class CalculatorKeyboardModule {}
