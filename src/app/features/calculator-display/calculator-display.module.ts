import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorDisplayComponent } from './calculator-display.component';

@NgModule({
  declarations: [CalculatorDisplayComponent],
  imports: [CommonModule],
  exports: [CalculatorDisplayComponent],
})
export class CalculatorDisplayModule {}
