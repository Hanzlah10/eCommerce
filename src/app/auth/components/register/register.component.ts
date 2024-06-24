import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { selectIsSubmitting, selectValidationErrors } from '../../store/reducers';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { authActions } from '../../store/actions';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  constructor(private store: Store, private fb: FormBuilder, private authSrive: AuthService) { }


  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    role: ['', Validators.required]
  })


  $data = combineLatest({
    isSubmitting$: this.store.select(selectIsSubmitting),
    backEndError$: this.store.select(selectValidationErrors)
  })

  onSubmit() {
    const request: RegisterRequestInterface = this.form.getRawValue()
    console.log(request);
    // this.store.dispatch(authActions.register({ request }))
    this.authSrive.registerUser(request).subscribe((data) => {
      console.log(data.email);
    })
  }
}
