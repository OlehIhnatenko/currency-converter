import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CurrencyService } from './currency.service';

describe('CurrencyService', () => {
  let service: CurrencyService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CurrencyService]
    });

    service = TestBed.inject(CurrencyService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch currencies', () => {
    const dummyResponse = {
      response: [
        { short_code: 'USD', name: 'US Dollar' },
        { short_code: 'EUR', name: 'Euro' }
      ]
    };

    service.getCurrencies().subscribe((currencies) => {
      expect(currencies.length).toBe(2);
      expect(currencies[0].short_code).toBe('USD');
    });

    const req = httpMock.expectOne(`(service as any).apiUrl}/currencies?api_key=${(service as any).apiKey}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });
});
