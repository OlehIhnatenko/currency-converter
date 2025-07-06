import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Currency } from '../../interfaces/currency.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-currency-selector',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  templateUrl: './currency-selector.component.html'
})
export class CurrencySelectorComponent {
  @Input() currencies: Currency[] = [];
  @Input() selectedCurrency: string = '';
  @Input() label: string = 'Currency';
  @Output() currencyChange = new EventEmitter<string>();

  onCurrencyChange(value: string) {
    this.currencyChange.emit(value);
  }
}
