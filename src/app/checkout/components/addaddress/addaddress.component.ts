import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Address } from '../../types/Address.interface';

@Component({
  selector: 'app-addaddress',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './addaddress.component.html',
  styleUrls: ['./addaddress.component.css']
})
export class AddAddressComponent implements OnChanges {

  @Input() addressToEdit: Address | null = null
  @Input() formStatus: string = ''
  @Output() formData = new EventEmitter<Address>();

  form = this.fb.nonNullable.group({
    addressLine1: ['', Validators.required],
    addressLine2: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    pincode: ['', Validators.required],
    country: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['addressToEdit'] && this.addressToEdit) {
      this.form.patchValue(this.addressToEdit);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const address: Address = this.form.getRawValue();
      this.formData.emit(address);
    }
  }
}
