import { Component, Input, OnInit } from '@angular/core';
import { AddressService } from '../services/address.service';
import { FormControl } from '@angular/forms';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
} from 'rxjs';
import { Address } from '../interfaces/address.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Input() initialValue!: number;
  counter: number = 0;
  zipCodeField!: FormControl;
  address$!: Observable<Address>;

  constructor(private addressService: AddressService) {}

  updateCounter(): void {
    this.counter += 1;
  }

  ngOnInit(): void {
    this.zipCodeField = new FormControl('');
    this.counter = this.initialValue;

    this.address$ = this.zipCodeField.valueChanges.pipe(
      debounceTime(600),
      distinctUntilChanged(),
      filter((value) => value.length === 8),
      switchMap((value) => this.addressService.getAddress(value))
    );
  }
}
