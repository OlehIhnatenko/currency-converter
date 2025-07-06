import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConversionService } from './conversion.service';

describe('ConversionService', () => {
  let service: ConversionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConversionService]
    });
    service = TestBed.inject(ConversionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should convert currency', () => {
    const from = 'USD';
    const to = 'EUR';
    const amount = 10;
    const mockResponse = { convertedAmount: 9 };

    service.convert(from, to, amount).subscribe((result) => {
      expect(result.convertedAmount).toBe(9);
    });

    const req = httpMock.expectOne(`${(service as any).apiUrl}/convert?api_key=${(service as any).apiKey}&from=${from}&to=${to}&amount=${amount}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
