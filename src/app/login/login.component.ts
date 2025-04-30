import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // <— add these two
  email: string = '';
  password: string = '';

  onSubmit(): void {
    // for now just log/alert; we’ll hook up real auth & navigation later
    console.log('Logging in with', this.email, this.password);
    alert(`Logged in with email: ${this.email}`);
  }
}
