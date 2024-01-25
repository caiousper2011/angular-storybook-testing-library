import { Observable } from 'rxjs';
import { Address } from '../interfaces/address.interface';

export class AddressMockService {
  getAddress(_: string): Observable<Address> {
    return new Observable<Address>((observer) => {
      observer.next({
        cep: '01001-000',
        logradouro: 'Praça da Sé',
        complemento: 'lado ímpar',
        bairro: 'Sé',
        localidade: 'São Paulo',
        uf: 'SP',
        ibge: '3550308',
        gia: '1004',
        ddd: '11',
        siafi: '7107',
      });
    });
  }
}
