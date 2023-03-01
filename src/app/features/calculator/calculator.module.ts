import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CalculatorDisplayModule } from '../calculator-display/calculator-display.module';
import { CalculatorKeyboardModule } from '../calculator-keyboard/calculator-keyboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [CalculatorComponent],
  imports: [CommonModule, SharedModule, CalculatorDisplayModule, CalculatorKeyboardModule, BrowserAnimationsModule],
  exports: [CalculatorComponent],
})
export class CalculatorModule {}
