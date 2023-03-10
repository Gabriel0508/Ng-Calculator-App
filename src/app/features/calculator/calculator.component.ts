import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  animations: [],
})
export class CalculatorComponent implements OnInit {
  calculatedSum: string = '0';
  numToCalculate: string = '';
  bgToggle = false;

  constructor() {}

  ngOnInit(): void {}

  /**
   * Method to show the key which was pressed
   * @param key
   * @returns
   */
  keyPress(key: string): void {
    if (key === '.') {
      if (this.numToCalculate !== ' ') {
        const lastNum = this.getLastOperand();
        if (lastNum.lastIndexOf('.') >= 0) {
          return;
        }
      }
    }

    if (key === '0') {
      if (this.numToCalculate === '') {
        return;
      }
      const PrevKey = this.numToCalculate[this.numToCalculate.length - 1];
      if (
        PrevKey === '/' ||
        PrevKey === '*' ||
        PrevKey === '-' ||
        PrevKey === '+'
      ) {
        return;
      }
    }
    this.numToCalculate = this.numToCalculate + key;
  }

  /**
   * Method to show the operator which was pressed
   * @param operator
   * @returns
   */
  operatorPress(operator: string): void {
    if (this.numToCalculate === '') {
      return;
    }

    const lastKey = this.numToCalculate[this.numToCalculate.length - 1];
    if (
      lastKey === '/' ||
      lastKey === '*' ||
      lastKey === '-' ||
      lastKey === '+'
    ) {
      return;
    }
    this.numToCalculate = this.numToCalculate + operator;
  }

  /**
   * Method to calculate the sum of numbers
   * @param sum
   */
  calculate(sum: string): void {
    this.onCalculateSum();
    this.numToCalculate = '';
  }

  /**
   * Method to clear the calculator display
   * @param clear
   */
  clearAll(clear: string): void {
    this.numToCalculate = '';
    this.calculatedSum = '0';
  }

  deleteKey(lastKey: string): void {
    this.numToCalculate = this.numToCalculate.substring(
      0,
      this.numToCalculate.length - 1
    );
  }

  toggleBackground(bg: boolean) {
    this.bgToggle = !this.bgToggle;
  }

  private onCalculateSum(): void {
    let formula = this.numToCalculate;
    let lastKey = formula[formula.length - 1];
    if (lastKey === '.') {
      formula = formula.substring(0, formula.length - 1);
    }
    lastKey = formula[formula.length - 1];
    if (
      lastKey === '/' ||
      lastKey === '*' ||
      lastKey === '-' ||
      lastKey === '+' ||
      lastKey === '.'
    ) {
      formula = formula.substring(0, formula.length - 1);
    }
    this.calculatedSum = eval(formula);
  }

  private getLastOperand(): string {
    let pos: number;
    pos = this.numToCalculate.toString().lastIndexOf('+');
    if (this.numToCalculate.toString().lastIndexOf('-') > pos)
      pos = this.numToCalculate.lastIndexOf('-');
    if (this.numToCalculate.toString().lastIndexOf('*') > pos)
      pos = this.numToCalculate.lastIndexOf('*');
    if (this.numToCalculate.toString().lastIndexOf('/') > pos)
      pos = this.numToCalculate.lastIndexOf('/');
    return this.numToCalculate.substring(pos + 1);
  }
}
