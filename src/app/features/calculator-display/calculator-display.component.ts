import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-display',
  templateUrl: './calculator-display.component.html',
  styleUrls: ['./calculator-display.component.scss'],
})
export class CalculatorDisplayComponent implements OnInit {
  @Input() toCalculate: string = '';
  @Input() calculated: string = '';

  constructor() {}

  ngOnInit(): void {}
}
