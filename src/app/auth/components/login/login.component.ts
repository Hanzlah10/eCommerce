import { Component } from '@angular/core';
import { PrimengModule } from '../../../Modules/primeng.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
