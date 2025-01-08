import { TuiInputModule } from '@taiga-ui/legacy';
import { Component } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiButton} from '@taiga-ui/core';

@Component({
  selector: 'app-login',
  imports: [TuiButton, ReactiveFormsModule, TuiInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
