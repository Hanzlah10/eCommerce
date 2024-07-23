import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Address } from '../../types/Address.interface';

@Component({
  selector: 'app-addaddress',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './addaddress.component.html',
  styleUrls: ['./addaddress.component.css']
})
export class AddAddressComponent {

  @Output() formData = new EventEmitter<Address>();
  constructor(private fb: FormBuilder) { }

  form = this.fb.nonNullable.group({
    addressLine1: ['', Validators.required],
    addressLine2: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    pincode: ['', Validators.required],
    country: ['', Validators.required],
  });

  onSubmit() {
    if (this.form.valid) {
      const address: Address = this.form.getRawValue();
      this.formData.emit(address);
    }
  }
}
