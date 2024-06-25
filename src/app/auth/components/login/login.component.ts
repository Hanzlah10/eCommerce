import { Component } from '@angular/core';
import { PrimengModule } from '../../../Modules/primeng.module';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { authActions } from '../../store/actions';
import { combineLatest } from 'rxjs';
import { selectIsSubmitting, selectValidationErrors } from '../../store/reducers';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PrimengModule, CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private store: Store, private fb: FormBuilder) { }

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  })


  $data = combineLatest({
    isSubmitting$: this.store.select(selectIsSubmitting),
    backEndError$: this.store.select(selectValidationErrors)
  })

  onSubmit() {
    const request: LoginRequestInterface = this.form.getRawValue()
    // console.log(request);
    this.store.dispatch(authActions.login({ request }))
  }

  // showSuccess() {
  //   this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content', life: 10000 });
  // }
}


