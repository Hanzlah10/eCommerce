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
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PrimengModule, CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private store: Store, private fb: FormBuilder, private autserive: AuthService) { }

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
    console.log(request);
    // this.autserive.loginUser(request).subscribe((data) => {
    //   console.log(data);
    // })
    this.store.dispatch(authActions.login({ request }))
  }
}


