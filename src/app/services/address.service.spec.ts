import { TestBed } from '@angular/core/testing';

import { AddressService } from './address.service';
import { HttpClientModule } from '@angular/common/http';

describe('AddressService', () => {
  let service: AddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(AddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
