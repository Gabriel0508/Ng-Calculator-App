import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calculator-mode',
  templateUrl: './calculator-mode.component.html',
  styleUrls: ['./calculator-mode.component.scss']
})
export class CalculatorModeComponent implements OnInit{
  @Output() toggleBackground = new EventEmitter<boolean>()
  constructor(){}

  ngOnInit(){}

  toggleBackgroundColor(): void {
    this.toggleBackground.emit(true);
  }
}
