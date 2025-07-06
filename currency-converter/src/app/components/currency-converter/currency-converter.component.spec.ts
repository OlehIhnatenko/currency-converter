import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyConverterComponent } from './currency-converter.component';
import { CurrencyService } from '../../services/currency.service';
import { ConversionService } from '../../services/conversion.service';
import { of, throwError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CURRENCIES_MOCK } from '../../mock/currencies.mock';

describe('CurrencyConverterComponent', () => {
  let component: CurrencyConverterComponent;
  let fixture: ComponentFixture<CurrencyConverterComponent>;
  let currencyServiceSpy: jasmine.SpyObj<CurrencyService>;
  let conversionServiceSpy: jasmine.SpyObj<ConversionService>;

  beforeEach(async () => {
    const currencySpy = jasmine.createSpyObj('CurrencyService', ['getCurrencies']);
    const conversionSpy = jasmine.createSpyObj('ConversionService', ['convertCurrency']);

    await TestBed.configureTestingModule({
      declarations: [CurrencyConverterComponent],
      imports: [FormsModule],
      providers: [
        { provide: CurrencyService, useValue: currencySpy },
        { provide: ConversionService, useValue: conversionSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencyConverterComponent);
    component = fixture.componentInstance;
    currencyServiceSpy = TestBed.inject(CurrencyService) as jasmine.SpyObj<CurrencyService>;
    conversionServiceSpy = TestBed.inject(ConversionService) as jasmine.SpyObj<ConversionService>;
  });

  it('should load currencies on init', () => {
    currencyServiceSpy.getCurrencies.and.returnValue(of(CURRENCIES_MOCK));

    fixture.detectChanges();

    expect(component.currencies.length).toBe(2);
    expect(component.fromCurrency).toBe('USD');
    expect(component.toCurrency).toBe('EUR');
  });

  it('should convert currency successfully', () => {
    component.fromCurrency = 'USD';
    component.toCurrency = 'EUR';
    component.amount = 10;
    const mockResponse = { convertedAmount: 9 };

    conversionServiceSpy.convert.and.returnValue(of(mockResponse));

    component.onConvert();

    expect(conversionServiceSpy.convert).toHaveBeenCalledWith('USD', 'EUR', 10);
    expect(component.convertedAmount).toBe(9);
  });

  it('should handle conversion error', () => {
    conversionServiceSpy.convert.and.returnValue(throwError(() => new Error('API Error')));

    component.onConvert();

    expect(component.convertedAmount).toBeNull();
  });
});
