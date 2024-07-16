import { Component } from '@angular/core';
import { PrimengModule } from '../../../Modules/primeng.module';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { authActions } from '../../store/actions';
import { combineLatest } from 'rxjs';
import { selectIsSubmitting, selectValidationErrors } from '../../store/reducers';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PrimengModule, CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isPopoverVisible = false;
  hidePopoverTimeout: any;


  constructor(private store: Store, private fb: FormBuilder, private authService: AuthService, private messageService: MessageService) { }

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  })


  $data = combineLatest({
    isSubmitting$: this.store.select(selectIsSubmitting),
    backEndError$: this.store.select(selectValidationErrors),
  })

  onSubmit() {
    const request: LoginRequestInterface = this.form.getRawValue()
    this.store.dispatch(authActions.login({ request }))
  }


  email: any = new FormControl(' ', Validators.required)

  forgotPassword() {
    if (this.email.value) {
      this.authService.forgotPassword(this.email.value)
      this.messageService.add({ severity: 'success', summary: 'Email Sent', detail: 'Check your Email!' });
      this.hidePopover()
      this.email = ' '
    }
  }


  showPopover() {
    this.isPopoverVisible = true;
    if (this.hidePopoverTimeout) {
      clearTimeout(this.hidePopoverTimeout);
    }
  }

  hidePopover() {
    this.hidePopoverTimeout = setTimeout(() => {
      this.isPopoverVisible = false;
    }, 200);
  }

  delayedHidePopover() {
    this.hidePopoverTimeout = setTimeout(() => {
      this.isPopoverVisible = false;
    }, 200);
  }




  // showSuccess() {
  //   this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content', life: 10000 });
  // }
}


