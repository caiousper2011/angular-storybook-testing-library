import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from '../interfaces/address.interface';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAddress(zipCode: string): Observable<Address> {
    return this.http.get<Address>(`${this.BASE_URL}/${zipCode}/json`);
  }
}
