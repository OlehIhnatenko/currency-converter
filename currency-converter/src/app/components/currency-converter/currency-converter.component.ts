import { Component } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { ConversionService } from '../../services/conversion.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-currency-converter',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.scss'
})
export class CurrencyConverterComponent {
  currencies: any = [];
  fromCurrency: string = '';
  toCurrency: string = '';
  amount: number = 1;
  convertedAmount: number | null = null;
  isLoading = false;

  constructor(
    private currencyService: CurrencyService,
    private conversionService: ConversionService
  ) { }

  ngOnInit(): void {
    this.loadCurrencies();
  }

  loadCurrencies(): void {
    this.currencyService.getCurrencies().subscribe((currencies) => {
        this.currencies = currencies;
        console.log(Array.isArray(this.currencies))
        this.fromCurrency = this.currencies[0].short_code;
        this.toCurrency = this.currencies[1].short_code;
      },
      (error) => {
        console.error('Error loading currencies:', error);
      }
    );
  }

  onConvert(): void {
    if (!this.fromCurrency || !this.toCurrency || !this.amount) return;

    this.isLoading = true;
    this.conversionService.convert(this.fromCurrency, this.toCurrency, this.amount).subscribe(
      (response) => {
        this.convertedAmount = response.value;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error converting currency:', error);
        this.isLoading = false;
      }
    );
  }
}
