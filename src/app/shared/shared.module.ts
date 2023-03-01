import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorModeComponent } from './calculator-mode/calculator-mode.component';

@NgModule({
  declarations: [CalculatorModeComponent],
  imports: [CommonModule],
  exports: [CalculatorModeComponent],
})
export class SharedModule {}
