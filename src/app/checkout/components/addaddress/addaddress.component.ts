import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { checkoutActions } from '../../store/actions';

@Component({
  selector: 'app-addaddress',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './addaddress.component.html',
  styleUrl: './addaddress.component.css'
})
export class AddAddressComponent {




  constructor(private fb: FormBuilder, private store: Store) { }

  form = this.fb.nonNullable.group({
    addressLine1: ['', Validators.required],
    addressLine2: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    pincode: ['', Validators.required],
    country: ['', Validators.required],
  })

  onSubmit() {
    let address = this.form.getRawValue()
    this.store.dispatch(checkoutActions.addAddress(address))
    console.log(this.form.getRawValue());

  }
}
