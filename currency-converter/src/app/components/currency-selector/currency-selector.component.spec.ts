import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencySelectorComponent } from './currency-selector.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CurrencySelectorComponent', () => {
  let component: CurrencySelectorComponent;
  let fixture: ComponentFixture<CurrencySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, MatFormFieldModule, MatSelectModule, NoopAnimationsModule],
      declarations: [CurrencySelectorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencySelectorComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit currencyChange on selection', () => {
    spyOn(component.currencyChange, 'emit');
    const mockValue = 'USD';

    component.onCurrencyChange(mockValue);

    expect(component.currencyChange.emit).toHaveBeenCalledWith('USD');
  });
});
