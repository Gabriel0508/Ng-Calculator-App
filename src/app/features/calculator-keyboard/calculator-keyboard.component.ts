import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calculator-keyboard',
  templateUrl: './calculator-keyboard.component.html',
  styleUrls: ['./calculator-keyboard.component.scss'],
})
export class CalculatorKeyboardComponent implements OnInit {
  @Output() keyPress = new EventEmitter<string>();
  @Output() operatorPress = new EventEmitter<string>();
  @Output() clearCalculatedSum = new EventEmitter<string>();
  @Output() calculateSum = new EventEmitter<string>();
  @Output() deleteLastKey = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onKeyPress(key: string): void {
    this.keyPress.emit(key);
  }

  onOperatorPress(operator: string) {
    this.operatorPress.emit(operator);
  }

  onCalculateSum(calculate: string): void {
    this.calculateSum.emit(calculate);
  }

  clearSum(clear: string): void {
    this.clearCalculatedSum.emit(clear);
  }

  onDeleteLastKey(lastKey: string): void {
    this.deleteLastKey.emit(lastKey)
  }
}
