import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
@NgModule({
  declarations: [],
  imports: [],
  exports: [
    CommonModule,
    ButtonModule,
    FloatLabelModule,
    ToastModule,
    CardModule,
    RippleModule,
    ConfirmPopupModule
  ]
})

export class PrimengModule { }
